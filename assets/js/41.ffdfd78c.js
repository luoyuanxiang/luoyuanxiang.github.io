(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{423:function(s,e,a){"use strict";a.r(e);var t=a(6),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ol",[e("li",[e("p",[s._v("对查询进行优化，要尽量避免全表扫描，首先应考虑在where及order by涉及的列上建立索引。")])]),s._v(" "),e("li",[e("p",[s._v("应尽量避免在where子句中对字段进行null值判断，否则将导致引擎放弃使用索引而进行全表扫描，如：")])])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("最好不要给数据库留"),e("code",[s._v("NULL")]),s._v("，尽可能的使用"),e("code",[s._v("NOT NULL")]),s._v("填充数据库.\n备注、描述、评论之类的可以设置为"),e("code",[s._v("NULL")]),s._v("，其他的，最好不要使用"),e("code",[s._v("NULL")]),s._v("。\n不要以为"),e("code",[s._v("NULL")]),s._v("不需要空间，比如："),e("code",[s._v("char(100)")]),s._v("型，在字段建立时，空间就固定了， 不管是否插入值（"),e("code",[s._v("NULL")]),s._v("也包含在内），都是占用 100个字符的空间的，如果是"),e("code",[s._v("varchar")]),s._v("这样的变长字段，"),e("code",[s._v("null")]),s._v("不占用空间。\n可以在"),e("code",[s._v("num")]),s._v("上设置默认值0，确保表中num列没有null值，然后这样查询：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("应尽量避免在"),e("code",[s._v("where")]),s._v("子句中使用"),e("code",[s._v("!=")]),s._v("或"),e("code",[s._v("<>")]),s._v("操作符，否则将引擎放弃使用索引而进行全表扫描。")]),s._v(" "),e("li",[s._v("应尽量避免在"),e("code",[s._v("where")]),s._v("子句中使用"),e("code",[s._v("or")]),s._v("来连接条件，如果一个字段有索引，一个字段没有索引，将导致引擎放弃使用索引而进行全表扫描，如：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" Name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以这样查询：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" Name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[e("code",[s._v("in")]),s._v("和"),e("code",[s._v("not in")]),s._v("也要慎用，否则会导致全表扫描，如：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("对于连续的数值，能用 "),e("code",[s._v("between")]),s._v(" 就不要用"),e("code",[s._v("in")]),s._v("了：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("很多时候用"),e("code",[s._v("exists")]),s._v("代替"),e("code",[s._v("in")]),s._v("是一个好的选择：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("用下面的语句替换：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" b "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("num"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"6"}},[e("li",[s._v("下面的查询也将导致全表扫描：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" ‘"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("abc"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("’\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("若要提高效率，可以考虑全文检索。")]),s._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[s._v("如果在"),e("code",[s._v("where")]),s._v("子句中使用参数，也会导致全表扫描。因为"),e("code",[s._v("SQL")]),s._v("只有在运行时才会解析局部变量，但优化程序不能将访问计划的选择推迟到运行时；它必须在编译时进行选择。然 而，如果在编译时建立访问计划，变量的值还是未知的，因而无法作为索引选择的输入项。如下面语句将进行全表扫描：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@num")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以改为强制查询使用索引：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("索引名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@num")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("应尽量避免在 "),e("code",[s._v("where")]),s._v(" 子句中对字段进行表达式操作，这将导致引擎放弃使用索引而进行全表扫描。如：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("应改为:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"8"}},[e("li",[s._v("应尽量避免在where子句中对字段进行函数操作，这将导致引擎放弃使用索引而进行全表扫描。如：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" substring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ’abc’       "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("–name以abc开头的id\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" datediff"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("day")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("createdate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("’"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2005")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("′"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("–‘"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2005")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("’    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--生成的id")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("应改为:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abc%'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" createdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2005-11-30'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" createdate "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2005-12-1'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"9"}},[e("li",[s._v("不要在"),e("code",[s._v("where")]),s._v("子句中的=左边进行函数、算术运算或其他表达式运算，否则系统将可能无法正确使用索引。")]),s._v(" "),e("li",[s._v("在使用索引字段作为条件时，如果该索引是复合索引，那么必须使用到该索引中的第一个字段作为条件时才能保证系统使用该索引，否则该索引将不会被使用，并且应尽可能的让字段顺序与索引顺序相一致。")]),s._v(" "),e("li",[s._v("不要写一些没有意义的查询，如需要生成一个空表结构：")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" col1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("col2 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#t from t where 1=0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这类代码不会返回任何结果集，但是会消耗系统资源的，应改成这样：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#t(…)")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"12"}},[e("li",[e("code",[s._v("Update")]),s._v("语句，如果只更改1、2个字段，不要"),e("code",[s._v("Update")]),s._v("全部字段，否则频繁调用会引起明显的性能消耗，同时带来大量日志。")]),s._v(" "),e("li",[s._v("对于多张大数据量（这里几百条就算大了）的表"),e("code",[s._v("JOIN")]),s._v("，要先分页再"),e("code",[s._v("JOIN")]),s._v("，否则逻辑读会很高，性能很差。")]),s._v(" "),e("li",[e("code",[s._v("select count(*) from table；")]),s._v("这样不带任何条件的"),e("code",[s._v("count")]),s._v("会引起全表扫描，并且没有任何业务意义，是一定要杜绝的。")]),s._v(" "),e("li",[s._v("索引并不是越多越好，索引固然可以提高相应的"),e("code",[s._v("select")]),s._v("的效率，但同时也降低了"),e("code",[s._v("insert")]),s._v("及"),e("code",[s._v("update")]),s._v("的效率，因为"),e("code",[s._v("insert")]),s._v("或"),e("code",[s._v("update")]),s._v("时有可能会重建索引，所以怎样建索引需要慎重考虑，视具体情况而定。一个表的索引数最好不要超过6个，若太多则应考虑一些不常使用到的列上建的索引是否有 必要。")]),s._v(" "),e("li",[s._v("应尽可能的避免更新"),e("code",[s._v("clustered")]),s._v("索引数据列，因为"),e("code",[s._v("clustered")]),s._v("索引数据列的顺序就是表记录的物理存储顺序，一旦该列值改变将导致整个表记录的顺序的调整，会耗费相当大的资源。若应用系统需要频繁更新"),e("code",[s._v("clustered")]),s._v("索引数据列，那么需要考虑是否应将该索引建为"),e("code",[s._v("clustered")]),s._v("索引。")]),s._v(" "),e("li",[s._v("尽量使用数字型字段，若只含数值信息的字段尽量不要设计为字符型，这会降低查询和连接的性能，并会增加存储开销。这是因为引擎在处理查询和连 接时会逐个比较字符串中每一个字符，而对于数字型而言只需要比较一次就够了。")]),s._v(" "),e("li",[s._v("尽可能的使用"),e("code",[s._v("varchar/nvarchar")]),s._v("代替"),e("code",[s._v("char/nchar")]),s._v("，因为首先变长字段存储空间小，可以节省存储空间，其次对于查询来说，在一个相对较小的字段内搜索效率显然要高些。")]),s._v(" "),e("li",[s._v("任何地方都不要使用"),e("code",[s._v("select * from t")]),s._v("用具体的字段列表代替*，不要返回用不到的任何字段。")]),s._v(" "),e("li",[s._v("尽量使用表变量来代替临时表。如果表变量包含大量数据，请注意索引非常有限（只有主键索引）。")]),s._v(" "),e("li",[s._v("避免频繁创建和删除临时表，以减少系统表资源的消耗。临时表并不是不可使用，适当地使用它们可以使某些例程更有效，例如，当需要重复引用大型表或常用表中的某个数据集时。但是，对于一次性事件， 最好使用导出表。")]),s._v(" "),e("li",[s._v("在新建临时表时，如果一次性插入数据量很大，那么可以使用"),e("code",[s._v("select into")]),s._v("代替"),e("code",[s._v("create table")]),s._v("，避免造成大量 "),e("code",[s._v("log")]),s._v(" ，以提高速度；如果数据量不大，为了缓和系统表的资源，应先"),e("code",[s._v("create table")]),s._v("，然后"),e("code",[s._v("insert")]),s._v("。")]),s._v(" "),e("li",[s._v("如果使用到了临时表，在存储过程的最后务必将所有的临时表显式删除，先"),e("code",[s._v("truncate table")]),s._v("，然后"),e("code",[s._v("drop table")]),s._v("，这样可以避免系统表的较长时间锁定。")]),s._v(" "),e("li",[s._v("尽量避免使用游标，因为游标的效率较差，如果游标操作的数据超过1万行，那么就应该考虑改写。")]),s._v(" "),e("li",[s._v("使用基于游标的方法或临时表方法之前，应先寻找基于集的解决方案来解决问题，基于集的方法通常更有效。")]),s._v(" "),e("li",[s._v("与临时表一样，游标并不是不可使用。对小型数据集使用"),e("code",[s._v("FAST_FORWARD")]),s._v("游标通常要优于其他逐行处理方法，尤其是在必须引用几个表才能获得所需的数据时。在结果集中包括“合计”的例程通常要比使用游标执行的速度快。如果开发时 间允许，基于游标的方法和基于集的方法都可以尝试一下，看哪一种方法的效果更好。")]),s._v(" "),e("li",[s._v("在所有的存储过程和触发器的开始处设置"),e("code",[s._v("SET NOCOUNT ON")]),s._v("，在结束时设置"),e("code",[s._v("SET NOCOUNT OFF")]),s._v("。无需在执行存储过程和触发器的每个语句后向客户端发送"),e("code",[s._v("DONE_IN_PROC")]),s._v("消息。")]),s._v(" "),e("li",[s._v("尽量避免大事务操作，提高系统并发能力。")]),s._v(" "),e("li",[s._v("尽量避免向客户端返回大数据量，若数据量过大，应该考虑相应需求是否合理。")])]),s._v(" "),e("blockquote",[e("p",[s._v("人所缺乏的不是才干而是志向，不是成功的能力而是勤劳的意志。 —— 部尔卫")])])])}),[],!1,null,null,null);e.default=r.exports}}]);