use super::*;

#[allow(clippy::too_many_arguments)]
pub(super) fn process_unpivot(
    proj_pd: &mut ProjectionPushDown,
    lp: IR,
    args: &Arc<UnpivotArgsIR>,
    input: Node,
    ctx: ProjectionContext,
    lp_arena: &mut Arena<IR>,
    expr_arena: &mut Arena<AExpr>,
) -> PolarsResult<IR> {
    if args.on.is_empty() {
        // restart projection pushdown
        proj_pd.no_pushdown_restart_opt(lp, ctx, lp_arena, expr_arena)
    } else {
        let (acc_projections, mut local_projections, projected_names) = split_acc_projections(
            ctx.acc_projections,
            lp_arena.get(input).schema(lp_arena).as_ref(),
            expr_arena,
            false,
        );

        if !local_projections.is_empty() {
            local_projections.extend_from_slice(&acc_projections);
        }
        let mut ctx = ProjectionContext::new(acc_projections, projected_names, ctx.inner);

        // make sure that the requested columns are projected
        args.index
            .iter()
            .for_each(|name| add_str_to_accumulated(name.clone(), &mut ctx, expr_arena));
        args.on
            .iter()
            .for_each(|name| add_str_to_accumulated(name.clone(), &mut ctx, expr_arena));

        proj_pd.pushdown_and_assign(input, ctx, lp_arena, expr_arena)?;

        // re-make unpivot node so that the schema is updated
        let lp = IRBuilder::new(input, expr_arena, lp_arena)
            .unpivot(args.clone())
            .build();

        if local_projections.is_empty() {
            Ok(lp)
        } else {
            Ok(IRBuilder::from_lp(lp, expr_arena, lp_arena)
                .project_simple_nodes(local_projections)
                .unwrap()
                .build())
        }
    }
}
