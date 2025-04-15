(function() {
    var implementors = Object.fromEntries([["polars_core",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.BinaryChunked.html\" title=\"type polars_core::datatypes::BinaryChunked\">BinaryChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.DecimalChunked.html\" title=\"type polars_core::datatypes::DecimalChunked\">DecimalChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.StringChunked.html\" title=\"type polars_core::datatypes::StringChunked\">StringChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"type\" href=\"polars_core/datatypes/type.BinaryChunked.html\" title=\"type polars_core::datatypes::BinaryChunked\">BinaryChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"type\" href=\"polars_core/datatypes/type.StringChunked.html\" title=\"type polars_core::datatypes::StringChunked\">StringChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.StringChunked.html\" title=\"type polars_core::datatypes::StringChunked\">StringChunked</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>&gt; for &amp;<a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt; for &amp;<a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt; for <a class=\"struct\" href=\"polars_core/frame/struct.DataFrame.html\" title=\"struct polars_core::frame::DataFrame\">DataFrame</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for &amp;<a class=\"type\" href=\"polars_core/datatypes/type.BinaryChunked.html\" title=\"type polars_core::datatypes::BinaryChunked\">BinaryChunked</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; for &amp;<a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; for &amp;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; for <a class=\"enum\" href=\"polars_core/frame/column/enum.Column.html\" title=\"enum polars_core::frame::column::Column\">Column</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; for <a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.NumCast.html\" title=\"trait num_traits::cast::NumCast\">NumCast</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for &amp;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a> for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>, N: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N&gt; for &amp;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>, N: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;N&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;"]]],["polars_utils",[["impl&lt;T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/float/trait.Float.html\" title=\"trait num_traits::float::Float\">Float</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T&gt; for <a class=\"struct\" href=\"polars_utils/kahan_sum/struct.KahanSum.html\" title=\"struct polars_utils::kahan_sum::KahanSum\">KahanSum</a>&lt;T&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[10316,637]}