
(function(){var a=tinymce.each;tinymce.create("tinymce.plugins.TablePlugin",{init:function(b,c){var d=this;d.editor=b;d.url=c;a([["table","table.desc","mceInsertTable",true],["delete_table","table.del","mceTableDelete"],["delete_col","table.delete_col_desc","mceTableDeleteCol"],["delete_row","table.delete_row_desc","mceTableDeleteRow"],["col_after","table.col_after_desc","mceTableInsertColAfter"],["col_before","table.col_before_desc","mceTableInsertColBefore"],["row_after","table.row_after_desc","mceTableInsertRowAfter"],["row_before","table.row_before_desc","mceTableInsertRowBefore"],["row_props","table.row_desc","mceTableRowProps",true],["cell_props","table.cell_desc","mceTableCellProps",true],["split_cells","table.split_cells_desc","mceTableSplitCells",true],["merge_cells","table.merge_cells_desc","mceTableMergeCells",true]],function(e){b.addButton(e[0],{title:e[1],cmd:e[2],ui:e[3]})});if(b.getParam("inline_styles")){b.onPreProcess.add(function(e,g){var f=e.dom;a(f.select("table",g.node),function(i){var h;if(h=f.getAttrib(i,"width")){f.setStyle(i,"width",h);f.setAttrib(i,"width")}if(h=f.getAttrib(i,"height")){f.setStyle(i,"height",h);f.setAttrib(i,"height")}})})}b.onInit.add(function(){if(!tinymce.isIE&&b.getParam("forced_root_block")){function e(){var f=b.getBody().lastChild;if(f&&f.nodeName=="TABLE"){b.dom.add(b.getBody(),"p",null,'<br mce_bogus="1" />')}}b.onKeyUp.add(e);b.onSetContent.add(e);b.onVisualAid.add(e);b.onPreProcess.add(function(f,h){var g=h.node.lastChild;if(g&&g.childNodes.length==1&&g.firstChild.nodeName=="BR"){f.dom.remove(g)}});e()}if(b&&b.plugins.contextmenu){b.plugins.contextmenu.onContextMenu.add(function(h,f,j){var k,i=b.selection,g=i.getNode()||b.getBody();if(b.dom.getParent(j,"td")||b.dom.getParent(j,"th")){f.removeAll();if(g.nodeName=="A"&&!b.dom.getAttrib(g,"name")){f.add({title:"advanced.link_desc",icon:"link",cmd:b.plugins.advlink?"mceAdvLink":"mceLink",ui:true});f.add({title:"advanced.unlink_desc",icon:"unlink",cmd:"UnLink"});f.addSeparator()}if(g.nodeName=="IMG"&&g.className.indexOf("mceItem")==-1){f.add({title:"advanced.image_desc",icon:"image",cmd:b.plugins.advimage?"mceAdvImage":"mceImage",ui:true});f.addSeparator()}f.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",ui:true,value:{action:"insert"}});f.add({title:"table.props_desc",icon:"table_props",cmd:"mceInsertTable",ui:true});f.add({title:"table.del",icon:"delete_table",cmd:"mceTableDelete",ui:true});f.addSeparator();k=f.addMenu({title:"table.cell"});k.add({title:"table.cell_desc",icon:"cell_props",cmd:"mceTableCellProps",ui:true});k.add({title:"table.split_cells_desc",icon:"split_cells",cmd:"mceTableSplitCells",ui:true});k.add({title:"table.merge_cells_desc",icon:"merge_cells",cmd:"mceTableMergeCells",ui:true});k=f.addMenu({title:"table.row"});k.add({title:"table.row_desc",icon:"row_props",cmd:"mceTableRowProps",ui:true});k.add({title:"table.row_before_desc",icon:"row_before",cmd:"mceTableInsertRowBefore"});k.add({title:"table.row_after_desc",icon:"row_after",cmd:"mceTableInsertRowAfter"});k.add({title:"table.delete_row_desc",icon:"delete_row",cmd:"mceTableDeleteRow"});k.addSeparator();k.add({title:"table.cut_row_desc",icon:"cut",cmd:"mceTableCutRow"});k.add({title:"table.copy_row_desc",icon:"copy",cmd:"mceTableCopyRow"});k.add({title:"table.paste_row_before_desc",icon:"paste",cmd:"mceTablePasteRowBefore"});k.add({title:"table.paste_row_after_desc",icon:"paste",cmd:"mceTablePasteRowAfter"});k=f.addMenu({title:"table.col"});k.add({title:"table.col_before_desc",icon:"col_before",cmd:"mceTableInsertColBefore"});k.add({title:"table.col_after_desc",icon:"col_after",cmd:"mceTableInsertColAfter"});k.add({title:"table.delete_col_desc",icon:"delete_col",cmd:"mceTableDeleteCol"})}else{f.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",ui:true})}})}});b.onKeyDown.add(function(f,g){if(g.keyCode==9&&f.dom.getParent(f.selection.getNode(),"TABLE")){if(!tinymce.isGecko&&!tinymce.isOpera){tinyMCE.execInstanceCommand(f.editorId,"mceTableMoveToNextRow",true);return tinymce.dom.Event.cancel(g)}f.undoManager.add()}});if(!tinymce.isIE){if(b.getParam("table_selection",true)){b.onClick.add(function(f,g){g=g.target;if(g.nodeName==="TABLE"){f.selection.select(g)}})}}b.onNodeChange.add(function(f,e,h){var g=f.dom.getParent(h,"td,th,caption");e.setActive("table",h.nodeName==="TABLE"||!!g);if(g&&g.nodeName==="CAPTION"){g=null}e.setDisabled("delete_table",!g);e.setDisabled("delete_col",!g);e.setDisabled("delete_table",!g);e.setDisabled("delete_row",!g);e.setDisabled("col_after",!g);e.setDisabled("col_before",!g);e.setDisabled("row_after",!g);e.setDisabled("row_before",!g);e.setDisabled("row_props",!g);e.setDisabled("cell_props",!g);e.setDisabled("split_cells",!g||(parseInt(f.dom.getAttrib(g,"colspan","1"))<2&&parseInt(f.dom.getAttrib(g,"rowspan","1"))<2));e.setDisabled("merge_cells",!g)});if(!tinymce.isIE){b.onBeforeSetContent.add(function(e,f){if(f.initial){f.content=f.content.replace(/<(td|th)([^>]+|)>\s*<\/(td|th)>/g,tinymce.isOpera?"<$1$2>&nbsp;</$1>":'<$1$2><br mce_bogus="1" /></$1>')}})}},execCommand:function(f,e,g){var d=this.editor,c;switch(f){case"mceTableMoveToNextRow":case"mceInsertTable":case"mceTableRowProps":case"mceTableCellProps":case"mceTableSplitCells":case"mceTableMergeCells":case"mceTableInsertRowBefore":case"mceTableInsertRowAfter":case"mceTableDeleteRow":case"mceTableInsertColBefore":case"mceTableInsertColAfter":case"mceTableDeleteCol":case"mceTableCutRow":case"mceTableCopyRow":case"mceTablePasteRowBefore":case"mceTablePasteRowAfter":case"mceTableDelete":d.execCommand("mceBeginUndoLevel");this._doExecCommand(f,e,g);d.execCommand("mceEndUndoLevel");return true}return false},getInfo:function(){return{longname:"Tables",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/table",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_doExecCommand:function(r,Z,ae){var V=this.editor,au=V,g=this.url;var n=V.selection.getNode();var W=V.dom.getParent(n,"tr");var aq=V.dom.getParent(n,"td,th");var F=V.dom.getParent(n,"table");var k=V.contentWindow.document;var av=F?F.getAttribute("border"):"";if(W&&aq==null){aq=W.cells[0]}function ap(y,x){for(var ax=0;ax<y.length;ax++){if(y[ax].length>0&&ap(y[ax],x)){return true}if(y[ax]==x){return true}}return false}function aj(x,i){var y;ad=e(F);x=x||0;i=i||0;x=Math.max(o.cellindex+x,0);i=Math.max(o.rowindex+i,0);V.execCommand("mceRepaint");y=d(ad,i,x);if(y){V.selection.select(y.firstChild||y);V.selection.collapse(1)}}function ah(){var i=k.createElement("td");if(!tinymce.isIE){i.innerHTML='<br mce_bogus="1"/>'}}function j(y){var x=V.dom.getAttrib(y,"colspan");var i=V.dom.getAttrib(y,"rowspan");x=x==""?1:parseInt(x);i=i==""?1:parseInt(i);return{colspan:x,rowspan:i}}function al(ax,az){var i,ay;for(ay=0;ay<ax.length;ay++){for(i=0;i<ax[ay].length;i++){if(ax[ay][i]==az){return{cellindex:i,rowindex:ay}}}}return null}function d(x,y,i){if(x[y]&&x[y][i]){return x[y][i]}return null}function A(aC,ax){var az=[],y=0,aA,ay,ax,aB;for(aA=0;aA<aC.rows.length;aA++){for(ay=0;ay<aC.rows[aA].cells.length;ay++,y++){az[y]=aC.rows[aA].cells[ay]}}for(aA=0;aA<az.length;aA++){if(az[aA]==ax){if(aB=az[aA+1]){return aB}}}}function e(aE){var i=[],aF=aE.rows,aC,aB,ay,az,aD,ax,aA;for(aB=0;aB<aF.length;aB++){for(aC=0;aC<aF[aB].cells.length;aC++){ay=aF[aB].cells[aC];az=j(ay);for(aD=aC;i[aB]&&i[aB][aD];aD++){}for(aA=aB;aA<aB+az.rowspan;aA++){if(!i[aA]){i[aA]=[]}for(ax=aD;ax<aD+az.colspan;ax++){i[aA][ax]=ay}}}}return i}function m(aG,aD,ay,ax){var y=e(aG),aF=al(y,ay);var aH,aC;if(ax.cells.length!=aD.childNodes.length){aH=aD.childNodes;aC=null;for(var aE=0;ay=d(y,aF.rowindex,aE);aE++){var aA=true;var aB=j(ay);if(ap(aH,ay)){ax.childNodes[aE]._delete=true}else{if((aC==null||ay!=aC)&&aB.colspan>1){for(var az=aE;az<aE+ay.colSpan;az++){ax.childNodes[az]._delete=true}}}if((aC==null||ay!=aC)&&aB.rowspan>1){ay.rowSpan=aB.rowspan+1}aC=ay}B(F)}}function O(x,i){while((x=x.previousSibling)!=null){if(x.nodeName==i){return x}}return null}function af(ax,ay){var x=ay.split(",");while((ax=ax.nextSibling)!=null){for(var y=0;y<x.length;y++){if(ax.nodeName.toLowerCase()==x[y].toLowerCase()){return ax}}}return null}function B(ax){if(ax.rows==0){return}var y=ax.rows[0];do{var x=af(y,"TR");if(y._delete){y.parentNode.removeChild(y);continue}var ay=y.cells[0];if(ay.cells>1){do{var i=af(ay,"TD,TH");if(ay._delete){ay.parentNode.removeChild(ay)}}while((ay=i)!=null)}}while((y=x)!=null)}function p(ax,aA,az){ax.rowSpan=1;var x=af(aA,"TR");for(var ay=1;ay<az&&x;ay++){var y=k.createElement("td");if(!tinymce.isIE){y.innerHTML='<br mce_bogus="1"/>'}if(tinymce.isIE){x.insertBefore(y,x.cells(ax.cellIndex))}else{x.insertBefore(y,x.cells[ax.cellIndex])}x=af(x,"TR")}}function S(aF,aH,aB){var y=e(aH);var ax=aB.cloneNode(false);var aG=al(y,aB.cells[0]);var aC=null;var aA=V.dom.getAttrib(aH,"border");var az=null;for(var aE=0;az=d(y,aG.rowindex,aE);aE++){var aD=null;if(aC!=az){for(var ay=0;ay<aB.cells.length;ay++){if(az==aB.cells[ay]){aD=az.cloneNode(true);break}}}if(aD==null){aD=aF.createElement("td");if(!tinymce.isIE){aD.innerHTML='<br mce_bogus="1"/>'}}aD.colSpan=1;aD.rowSpan=1;ax.appendChild(aD);aC=az}return ax}switch(r){case"mceTableMoveToNextRow":var L=A(F,aq);if(!L){V.execCommand("mceTableInsertRowAfter",aq);L=A(F,aq)}V.selection.select(L);V.selection.collapse(true);return true;case"mceTableRowProps":if(W==null){return true}if(Z){V.windowManager.open({url:g+"/row.htm",width:400+parseInt(V.getLang("table.rowprops_delta_width",0)),height:295+parseInt(V.getLang("table.rowprops_delta_height",0)),inline:1},{plugin_url:g})}return true;case"mceTableCellProps":if(aq==null){return true}if(Z){V.windowManager.open({url:g+"/cell.htm",width:400+parseInt(V.getLang("table.cellprops_delta_width",0)),height:295+parseInt(V.getLang("table.cellprops_delta_height",0)),inline:1},{plugin_url:g})}return true;case"mceInsertTable":if(Z){V.windowManager.open({url:g+"/table.htm",width:400+parseInt(V.getLang("table.table_delta_width",0)),height:320+parseInt(V.getLang("table.table_delta_height",0)),inline:1},{plugin_url:g,action:ae?ae.action:0})}return true;case"mceTableDelete":var G=V.dom.getParent(V.selection.getNode(),"table");if(G){G.parentNode.removeChild(G);V.execCommand("mceRepaint")}return true;case"mceTableSplitCells":case"mceTableMergeCells":case"mceTableInsertRowBefore":case"mceTableInsertRowAfter":case"mceTableDeleteRow":case"mceTableInsertColBefore":case"mceTableInsertColAfter":case"mceTableDeleteCol":case"mceTableCutRow":case"mceTableCopyRow":case"mceTablePasteRowBefore":case"mceTablePasteRowAfter":if(!F){return true}if(W&&F!=W.parentNode){F=W.parentNode}if(F&&W){switch(r){case"mceTableCutRow":if(!W||!aq){return true}V.tableRowClipboard=S(k,F,W);V.execCommand("mceTableDeleteRow");break;case"mceTableCopyRow":if(!W||!aq){return true}V.tableRowClipboard=S(k,F,W);break;case"mceTablePasteRowBefore":if(!W||!aq){return true}var v=V.tableRowClipboard.cloneNode(true);var h=O(W,"TR");if(h!=null){m(F,h,h.cells[0],v)}W.parentNode.insertBefore(v,W);break;case"mceTablePasteRowAfter":if(!W||!aq){return true}var X=af(W,"TR");var v=V.tableRowClipboard.cloneNode(true);m(F,W,aq,v);if(X==null){W.parentNode.appendChild(v)}else{X.parentNode.insertBefore(v,X)}break;case"mceTableInsertRowBefore":if(!W||!aq){return true}var ad=e(F);var o=al(ad,aq);var v=k.createElement("tr");var u=null;o.rowindex--;if(o.rowindex<0){o.rowindex=0}for(var ac=0;aq=d(ad,o.rowindex,ac);ac++){if(aq!=u){var E=j(aq);if(E.rowspan==1){var J=k.createElement("td");if(!tinymce.isIE){J.innerHTML='<br mce_bogus="1"/>'}J.colSpan=aq.colSpan;v.appendChild(J)}else{aq.rowSpan=E.rowspan+1}u=aq}}W.parentNode.insertBefore(v,W);aj(0,1);break;case"mceTableInsertRowAfter":if(!W||!aq){return true}var ad=e(F);var o=al(ad,aq);var v=k.createElement("tr");var u=null;for(var ac=0;aq=d(ad,o.rowindex,ac);ac++){if(aq!=u){var E=j(aq);if(E.rowspan==1){var J=k.createElement("td");if(!tinymce.isIE){J.innerHTML='<br mce_bogus="1"/>'}J.colSpan=aq.colSpan;v.appendChild(J)}else{aq.rowSpan=E.rowspan+1}u=aq}}if(v.hasChildNodes()){var X=af(W,"TR");if(X){X.parentNode.insertBefore(v,X)}else{F.appendChild(v)}}aj(0,1);break;case"mceTableDeleteRow":if(!W||!aq){return true}var ad=e(F);var o=al(ad,aq);if(ad.length==1&&F.nodeName=="TBODY"){V.dom.remove(V.dom.getParent(F,"table"));return true}var D=W.cells;var X=af(W,"TR");for(var ac=0;ac<D.length;ac++){if(D[ac].rowSpan>1){var J=D[ac].cloneNode(true);var E=j(D[ac]);J.rowSpan=E.rowspan-1;var ak=X.cells[ac];if(ak==null){X.appendChild(J)}else{X.insertBefore(J,ak)}}}var u=null;for(var ac=0;aq=d(ad,o.rowindex,ac);ac++){if(aq!=u){var E=j(aq);if(E.rowspan>1){aq.rowSpan=E.rowspan-1}else{W=aq.parentNode;if(W.parentNode){W._delete=true}}u=aq}}B(F);aj(0,-1);break;case"mceTableInsertColBefore":if(!W||!aq){return true}var ad=e(V.dom.getParent(F,"table"));var o=al(ad,aq);var u=null;for(var aa=0;aq=d(ad,aa,o.cellindex);aa++){if(aq!=u){var E=j(aq);if(E.colspan==1){var J=k.createElement(aq.nodeName);if(!tinymce.isIE){J.innerHTML='<br mce_bogus="1"/>'}J.rowSpan=aq.rowSpan;aq.parentNode.insertBefore(J,aq)}else{aq.colSpan++}u=aq}}aj();break;case"mceTableInsertColAfter":if(!W||!aq){return true}var ad=e(V.dom.getParent(F,"table"));var o=al(ad,aq);var u=null;for(var aa=0;aq=d(ad,aa,o.cellindex);aa++){if(aq!=u){var E=j(aq);if(E.colspan==1){var J=k.createElement(aq.nodeName);if(!tinymce.isIE){J.innerHTML='<br mce_bogus="1"/>'}J.rowSpan=aq.rowSpan;var ak=af(aq,"TD,TH");if(ak==null){aq.parentNode.appendChild(J)}else{ak.parentNode.insertBefore(J,ak)}}else{aq.colSpan++}u=aq}}aj(1);break;case"mceTableDeleteCol":if(!W||!aq){return true}var ad=e(F);var o=al(ad,aq);var u=null;if((ad.length>1&&ad[0].length<=1)&&F.nodeName=="TBODY"){V.dom.remove(V.dom.getParent(F,"table"));return true}for(var aa=0;aq=d(ad,aa,o.cellindex);aa++){if(aq!=u){var E=j(aq);if(E.colspan>1){aq.colSpan=E.colspan-1}else{if(aq.parentNode){aq.parentNode.removeChild(aq)}}u=aq}}aj(-1);break;case"mceTableSplitCells":if(!W||!aq){return true}var l=j(aq);var C=l.colspan;var H=l.rowspan;if(C>1||H>1){aq.colSpan=1;for(var am=1;am<C;am++){var J=k.createElement("td");if(!tinymce.isIE){J.innerHTML='<br mce_bogus="1"/>'}W.insertBefore(J,af(aq,"TD,TH"));if(H>1){p(J,W,H)}}p(aq,W,H)}F=V.dom.getParent(V.selection.getNode(),"table");break;case"mceTableMergeCells":var ao=[];var R=V.selection.getSel();var ad=e(F);if(tinymce.isIE||R.rangeCount==1){if(Z){var t=j(aq);V.windowManager.open({url:g+"/merge_cells.htm",width:240+parseInt(V.getLang("table.merge_cells_delta_width",0)),height:110+parseInt(V.getLang("table.merge_cells_delta_height",0)),inline:1},{action:"update",numcols:t.colspan,numrows:t.rowspan,plugin_url:g});return true}else{var U=parseInt(ae.numrows);var c=parseInt(ae.numcols);var o=al(ad,aq);if((""+U)=="NaN"){U=1}if((""+c)=="NaN"){c=1}var b=F.rows;for(var aa=o.rowindex;aa<ad.length;aa++){var ag=[];for(var ac=o.cellindex;ac<ad[aa].length;ac++){var f=d(ad,aa,ac);if(f&&!ap(ao,f)&&!ap(ag,f)){var N=al(ad,f);if(N.cellindex<o.cellindex+c&&N.rowindex<o.rowindex+U){ag[ag.length]=f}}}if(ag.length>0){ao[ao.length]=ag}var f=d(ad,o.rowindex,o.cellindex);a(au.dom.select("br",f),function(y,x){if(x>0&&au.dom.getAttrib("mce_bogus")){au.dom.remove(y)}})}}}else{var D=[];var R=V.selection.getSel();var Y=null;var an=null;var z=-1,aw=-1,w,at;if(R.rangeCount<2){return true}for(var am=0;am<R.rangeCount;am++){var ai=R.getRangeAt(am);var aq=ai.startContainer.childNodes[ai.startOffset];if(!aq){break}if(aq.nodeName=="TD"||aq.nodeName=="TH"){D[D.length]=aq}}var b=F.rows;for(var aa=0;aa<b.length;aa++){var ag=[];for(var ac=0;ac<b[aa].cells.length;ac++){var f=b[aa].cells[ac];for(var am=0;am<D.length;am++){if(f==D[am]){ag[ag.length]=f}}}if(ag.length>0){ao[ao.length]=ag}}var an=[];var Y=null;for(var aa=0;aa<ad.length;aa++){for(var ac=0;ac<ad[aa].length;ac++){ad[aa][ac]._selected=false;for(var am=0;am<D.length;am++){if(ad[aa][ac]==D[am]){if(z==-1){z=ac;aw=aa}w=ac;at=aa;ad[aa][ac]._selected=true}}}}for(var aa=aw;aa<=at;aa++){for(var ac=z;ac<=w;ac++){if(!ad[aa][ac]._selected){alert("Invalid selection for merge.");return true}}}}var s=1,q=1;var T=-1;for(var aa=0;aa<ao.length;aa++){var I=0;for(var ac=0;ac<ao[aa].length;ac++){var E=j(ao[aa][ac]);I+=E.colspan;if(T!=-1&&E.rowspan!=T){alert("Invalid selection for merge.");return true}T=E.rowspan}if(I>q){q=I}T=-1}var Q=-1;for(var ac=0;ac<ao[0].length;ac++){var M=0;for(var aa=0;aa<ao.length;aa++){var E=j(ao[aa][ac]);M+=E.rowspan;if(Q!=-1&&E.colspan!=Q){alert("Invalid selection for merge.");return true}Q=E.colspan}if(M>s){s=M}Q=-1}aq=ao[0][0];aq.rowSpan=s;aq.colSpan=q;for(var aa=0;aa<ao.length;aa++){for(var ac=0;ac<ao[aa].length;ac++){var P=ao[aa][ac].innerHTML;var K=P.replace(/[ \t\r\n]/g,"");if(K!="<br/>"&&K!="<br>"&&K!='<br mce_bogus="1"/>'&&(ac+aa>0)){aq.innerHTML+=P}if(ao[aa][ac]!=aq&&!ao[aa][ac]._deleted){var o=al(ad,ao[aa][ac]);var ar=ao[aa][ac].parentNode;ar.removeChild(ao[aa][ac]);ao[aa][ac]._deleted=true;if(!ar.hasChildNodes()){ar.parentNode.removeChild(ar);var ab=null;for(var ac=0;cellElm=d(ad,o.rowindex,ac);ac++){if(cellElm!=ab&&cellElm.rowSpan>1){cellElm.rowSpan--}ab=cellElm}if(aq.rowSpan>1){aq.rowSpan--}}}}}a(au.dom.select("br",aq),function(y,x){if(x>0&&au.dom.getAttrib(y,"mce_bogus")){au.dom.remove(y)}});break}F=V.dom.getParent(V.selection.getNode(),"table");V.addVisual(F);V.nodeChanged()}return true}return false}});tinymce.PluginManager.add("table",tinymce.plugins.TablePlugin)})();