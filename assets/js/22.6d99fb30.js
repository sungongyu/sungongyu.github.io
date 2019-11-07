(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{220:function(e,n,r){"use strict";r.r(n);var a=r(0),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[e._v("#")]),e._v(" mysql")]),e._v(" "),r("h2",{attrs:{id:"innodb存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎","aria-hidden":"true"}},[e._v("#")]),e._v(" InnoDB存储引擎")]),e._v(" "),r("h3",{attrs:{id:"行记录格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#行记录格式","aria-hidden":"true"}},[e._v("#")]),e._v(" 行记录格式")]),e._v(" "),r("p",[e._v("行溢出 如果一个列中存储 的数据不大于8098个字节，那就不会发生行溢出\ndelete_mask 标示数据是否被删除")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("InnoDB为了不同的目的而设计了不同类型的⻚，我们把用于存 放记录的⻚叫做数据⻚。")])]),e._v(" "),r("li",[r("p",[e._v("一个数据⻚可以被大致划分为7个部分，分别是\nFile Header，表示⻚的一些通用信息，占固定的38字 节。\nPage Header，表示数据⻚专有的一些信息，占固定的 56个字节。\nInfimum + Supremum，两个虚拟的伪记录，分别表示 ⻚中的最小和最大记录，占固定的26个字节。\nUser Records:真实存储我们插入的记录的部分，大 小不固定。\nFree Space:⻚中尚未使用的部分，大小不确定。 Page Directory:⻚中的某些记录相对位置，也就是 各个槽在⻚面中的地址偏移量，大小不固定，插入的记录 越多，这个部分占用的空间越多。\nFile Trailer:用于检验⻚是否完整的部分，占用固 定的8个字节。")])]),e._v(" "),r("li",[r("p",[e._v("每个记录的头信息中都有一个next_record属性，从而使⻚ 中的所有记录串联成一个单链表。")])]),e._v(" "),r("li",[r("p",[e._v("InnoDB会为把⻚中的记录划分为若干个组，每个组的最后一 个记录的地址偏移量作为一个槽，存放在Page Directory 中，所以在一个⻚中根据主键查找记录是非常快的，分为两 步:\n通过二分法确定该记录所在的槽。\n通过记录的next_record属性遍历该槽所在的组中的各个 记录。")])]),e._v(" "),r("li",[r("p",[e._v("每个数据⻚的File Header部分都有上一个和下一个⻚的编 号，所以所有的数据⻚会组成一个双链表。")])]),e._v(" "),r("li",[r("p",[e._v("为保证从内存中同步到磁盘的⻚的完整性，在⻚的首部和尾部 都会存储⻚中数据的校验和和⻚面最后修改时对应的LSN值， 如果首部和尾部的校验和和LSN值校验不成功的话，就说明同 步过程出现了问题。")])])]),e._v(" "),r("h2",{attrs:{id:"索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引","aria-hidden":"true"}},[e._v("#")]),e._v(" 索引")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("对于InnoDB存储引擎来说，在单个⻚中查找某条记录分为两 种情况:\n以主键为搜索条件，可以使用Page Directory通过二 分法快速定位相应的用户记录。\n以其他列为搜索条件，需要按照记录组成的单链表依次遍 历各条记录。")])]),e._v(" "),r("li",[r("p",[e._v("没有索引的情况下，不论是以主键还是其他列作为搜索条件， 只能沿着⻚的双链表从左到右依次遍历各个⻚。")])]),e._v(" "),r("li",[r("p",[e._v("InnoDB存储引擎的索引是一棵B+树，完整的用户记录都存储 在B+树第0层的叶子节点，其他层次的节点都属于内节点，内 节点里存储的是目录项记录。InnoDB的索引分为两大种:\n聚簇索引\n以主键值的大小为⻚和记录的排序规则，在叶子节点处存 储的记录包含了表中所有的列。\n二级索引\n以自定义的列的大小为⻚和记录的排序规则，在叶子节点 处存储的记录内容是列 + 主键。\nALTER TABLE index_demo DROP INDEX idx_c2_c3;")])]),e._v(" "),r("li",[r("p",[e._v("MyISAM存储引擎的数据和索引分开存储，这种存储引擎的索 引全部都是二级索引，在叶子节点处存储的是列 + ⻚号。")])])]),e._v(" "),r("h2",{attrs:{id:"索引使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 索引使用")]),e._v(" "),r("p",[e._v("上边只是我们在创建和使用B+树索引的过程中需要注意的一些点， 后边我们还会陆续介绍更多的优化方法和注意事项，敬请期待。本集 内容总结如下:")]),e._v(" "),r("ol",[r("li",[e._v("B+树索引在空间和时间上都有代价，所以没事儿别瞎建索引。 2. B+树索引适用于下边这些情况:\n全值匹配\n匹配左边的列\n匹配范围值\n精确匹配某一列并范围匹配另外一列\n用于排序\n用于分组")]),e._v(" "),r("li",[e._v("在使用索引时需要注意下边这些事项:\n只为用于搜索、排序或分组的列创建索引 为列的基数大的列创建索引\n索引列的类型尽量小\n可以只对字符串值的前缀建立索引 只有索引列在比较表达式中单独出现才可以适用索引 为了尽可能少的让聚簇索引发生⻚面分裂和记录移位的情 况，建议让主键拥有AUTO_INCREMENT属性。 定位并删除表中的重复和冗余索引 尽量适用覆盖索引进行查询，避免回表带来的性能损耗。")])])])}),[],!1,null,null,null);n.default=t.exports}}]);