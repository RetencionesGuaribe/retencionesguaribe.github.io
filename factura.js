const _0x526db8=_0x3f0a;(function(_0x5a1ba5,_0x18a9e8){const _0x5404b7=_0x3f0a,_0x382e3c=_0x5a1ba5();while(!![]){try{const _0x3c6091=-parseInt(_0x5404b7(0x216))/0x1*(-parseInt(_0x5404b7(0x253))/0x2)+parseInt(_0x5404b7(0x20e))/0x3*(-parseInt(_0x5404b7(0x2af))/0x4)+-parseInt(_0x5404b7(0x266))/0x5+-parseInt(_0x5404b7(0x238))/0x6*(parseInt(_0x5404b7(0x255))/0x7)+parseInt(_0x5404b7(0x2b1))/0x8+parseInt(_0x5404b7(0x263))/0x9*(parseInt(_0x5404b7(0x229))/0xa)+parseInt(_0x5404b7(0x23a))/0xb*(parseInt(_0x5404b7(0x267))/0xc);if(_0x3c6091===_0x18a9e8)break;else _0x382e3c['push'](_0x382e3c['shift']());}catch(_0x310ae6){_0x382e3c['push'](_0x382e3c['shift']());}}}(_0x69e2,0x3648d));function manejarSeleccionProducto(){const _0x4a4e3a=_0x3f0a;document[_0x4a4e3a(0x28e)]('change',function(_0x23d6ef){const _0x42ebc2=_0x4a4e3a;if(_0x23d6ef[_0x42ebc2(0x245)]&&_0x23d6ef['target'][_0x42ebc2(0x25e)][_0x42ebc2(0x2a1)](_0x42ebc2(0x25d))){const _0x230eb9=Array['from'](document[_0x42ebc2(0x1fc)]('productos-list')[_0x42ebc2(0x297)])[_0x42ebc2(0x233)](_0x9641aa=>_0x9641aa[_0x42ebc2(0x299)]===_0x23d6ef[_0x42ebc2(0x245)][_0x42ebc2(0x299)]);if(_0x230eb9){const _0x1b289f=_0x230eb9[_0x42ebc2(0x25f)](_0x42ebc2(0x22a)),_0x539417=_0x23d6ef[_0x42ebc2(0x245)][_0x42ebc2(0x2a9)]('.product-row'),_0x487ae9=_0x539417[_0x42ebc2(0x219)](_0x42ebc2(0x232));_0x487ae9[_0x42ebc2(0x299)]=_0x1b289f,calcularTotal(_0x487ae9);}}});}function guardarFactura(){guardarFacturaEnArchivo(),cerrarPopupArchivos();}function cargarFactura(){const _0x53a5b8=_0x3f0a,_0x3c59c2=document['createElement'](_0x53a5b8(0x29c));_0x3c59c2[_0x53a5b8(0x29d)]=_0x53a5b8(0x28d),_0x3c59c2['accept']='.json',_0x3c59c2['onchange']=function(_0x3da879){const _0x1c157d=_0x53a5b8,_0x3fb3bd=_0x3da879['target'][_0x1c157d(0x201)][0x0],_0x24dd1d=new FileReader();_0x24dd1d[_0x1c157d(0x22e)]=function(_0x6c62b8){const _0x2ed7f2=_0x1c157d,_0xc26fba=JSON['parse'](_0x6c62b8[_0x2ed7f2(0x245)]['result']);cargarFacturaEnInterfaz(_0xc26fba);},_0x24dd1d[_0x1c157d(0x230)](_0x3fb3bd);},_0x3c59c2[_0x53a5b8(0x21f)](),cerrarPopupArchivos();}const container=document[_0x526db8(0x1fc)](_0x526db8(0x1f4));container[_0x526db8(0x27f)]=function(_0x55c920){const _0x4cd98e=_0x526db8;let _0x100d50=_0x55c920['clientX']-container[_0x4cd98e(0x27e)]()[_0x4cd98e(0x258)],_0x362a4a=_0x55c920[_0x4cd98e(0x26e)]-container['getBoundingClientRect']()[_0x4cd98e(0x276)];function _0x2803a6(_0x475fda,_0x25c55c){const _0x5de6a4=_0x4cd98e;container[_0x5de6a4(0x237)][_0x5de6a4(0x258)]=_0x475fda-_0x100d50+'px',container['style'][_0x5de6a4(0x276)]=_0x25c55c-_0x362a4a+'px';}function _0x1cef85(_0x4d95fd){const _0x3a1b67=_0x4cd98e;_0x2803a6(_0x4d95fd[_0x3a1b67(0x1fd)],_0x4d95fd[_0x3a1b67(0x26d)]);}document[_0x4cd98e(0x28e)]('mousemove',_0x1cef85),document['onmouseup']=function(){const _0x37b4fe=_0x4cd98e;document[_0x37b4fe(0x2ac)]('mousemove',_0x1cef85),document[_0x37b4fe(0x290)]=null;};},container[_0x526db8(0x217)]=function(){return![];},window[_0x526db8(0x22e)]=function(){const _0x3d045b=_0x526db8;document[_0x3d045b(0x1fc)](_0x3d045b(0x225))[_0x3d045b(0x237)][_0x3d045b(0x278)]='flex',inicializarAutocompletado(),manejarSeleccionProducto();};function inicializarAutocompletado(){const _0x555cd2=_0x526db8;document[_0x555cd2(0x28e)](_0x555cd2(0x29c),function(_0x5e8f1b){const _0x8c5b26=_0x555cd2;if(_0x5e8f1b['target']&&_0x5e8f1b['target'][_0x8c5b26(0x25e)][_0x8c5b26(0x2a1)](_0x8c5b26(0x25d))){const _0x29439d=_0x5e8f1b[_0x8c5b26(0x245)][_0x8c5b26(0x299)][_0x8c5b26(0x264)](),_0x36ce34=productosComunes[_0x8c5b26(0x2b6)](_0x373402=>_0x373402['descripcion'][_0x8c5b26(0x264)]()[_0x8c5b26(0x298)](_0x29439d)),_0x3c4e8c=document[_0x8c5b26(0x1fc)](_0x8c5b26(0x257));_0x3c4e8c[_0x8c5b26(0x288)]=_0x36ce34[_0x8c5b26(0x27a)](_0x45896f=>_0x8c5b26(0x228)+_0x45896f[_0x8c5b26(0x269)]+_0x8c5b26(0x231)+_0x45896f[_0x8c5b26(0x287)]+'\x22>')[_0x8c5b26(0x2a3)]('');}});}function seleccionarProveedor(){const _0x3fd6f5=_0x526db8,_0x11e7ca=document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x284))[_0x3fd6f5(0x299)],_0x1cb8bc=document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x25b)),_0x6838c2=document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x294)),_0x3dc2ef=document['getElementById']('popupNroOperacion')[_0x3fd6f5(0x299)],_0x5ea0bb=document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x24c))[_0x3fd6f5(0x299)];let _0x5195a1;_0x1cb8bc[_0x3fd6f5(0x299)]==='manual'?_0x5195a1=document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x1f2))[_0x3fd6f5(0x299)]:_0x5195a1=_0x1cb8bc[_0x3fd6f5(0x297)][_0x1cb8bc[_0x3fd6f5(0x248)]]['text'],document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x20a))[_0x3fd6f5(0x299)]=_0x11e7ca,document[_0x3fd6f5(0x1fc)]('proveedorText')[_0x3fd6f5(0x2b5)]=_0x5195a1,document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x222))[_0x3fd6f5(0x2b5)]=_0x3fd6f5(0x2a7)+_0x6838c2[_0x3fd6f5(0x299)]+'%',document[_0x3fd6f5(0x1fc)](_0x3fd6f5(0x206))[_0x3fd6f5(0x2b5)]=_0x3dc2ef,_0x5ea0bb&&localStorage[_0x3fd6f5(0x27b)](_0x3fd6f5(0x22b),_0x5ea0bb),_0x1cb8bc&&localStorage[_0x3fd6f5(0x27b)](_0x3fd6f5(0x20c),_0x1cb8bc),document[_0x3fd6f5(0x1fc)]('popup')[_0x3fd6f5(0x237)][_0x3fd6f5(0x278)]=_0x3fd6f5(0x283);}function _0x69e2(){const _0x5c0303=['Error\x20en\x20la\x20solicitud\x20a\x20Sheety:\x20','removeEventListener','\x20onchange=\x22actualizarResumenGeneral()\x22>\x20E\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-eliminar\x22\x20onclick=\x22eliminarFila(this)\x22>X</button>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20','subtotalConIVA:','556888OiaGpO','Error\x20al\x20guardar\x20la\x20factura:\x20','2795544Uiphel','from','subtotalExento:','replace','innerText','filter','.txt','\x22\x20readonly>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22input-exento\x22\x20','Error\x20al\x20guardar\x20la\x20factura','Datos\x20copiados\x20al\x20portapapeles.','statusText','proveedorManual','download','draggableContainer','then','createObjectURL','\x22\x20oninput=\x22calcularTotal(this)\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22input-descripcion\x22\x20value=\x22','timbreFiscal','popupNroOperacion','idFactura','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-cantidad\x22\x20value=\x22','getElementById','pageX','proveedor','cantidad','appendChild','files','rif','Por\x20favor,\x20ingrese\x20un\x20ID\x20de\x20factura\x20válido.','\x20onchange=\x22actualizarResumenGeneral()\x22>\x20E\x0a\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-eliminar\x22\x20onclick=\x22eliminarFila(this)\x22>X</button>\x0a\x20\x20\x20\x20','.input-precio-total','nroOperacionText','total','writeText','subtotalGeneral','fecha','factura_','proveedorSelect','idFacturaPopup','6VCjryq','Ingrese\x20el\x20número\x20de\x20operación\x20a\x20buscar:','push','proveedorManualContainer','option','popupSheety','split','max','592WgWKoM','ondragstart','precioUnitario','querySelector','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22input-exento\x22\x20','getItem','Error\x20al\x20copiar\x20al\x20portapapeles:','LocalStorage\x20ha\x20sido\x20limpiado','No\x20se\x20encontraron\x20facturas\x20con\x20el\x20número\x20de\x20operación:\x20','click','checked','flex','retencionText','productos','product-row','popup','\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-rif=\x22','popupArchivos','<option\x20value=\x22','10OJTKFT','data-precio','montoDeseado','forEach','manual','onload','toFixed','readAsText','\x22\x20data-precio=\x22','.input-precio-unitario','find','plantilla-select','retencion','exentoGeneral','style','12DCLBOA','sheet1','540463TUZEsb','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22input-exento\x22\x20','remove','exento','catch','parse','\x22\x20oninput=\x22calcularTotal(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22input-descripcion\x22\x20value=\x22','stringify','ivaAPagar','Factura\x20guardada\x20exitosamente\x20en\x20Sheety\x20con\x20número\x20de\x20operación:\x20','.input-cantidad','target','montoDeseado:','\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-unitario\x22\x20value=\x22','selectedIndex','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-unitario\x22\x20value=\x22','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-total-con-descuento\x22\x20value=\x22','Error\x20al\x20buscar\x20la\x20factura:','popupMontoDeseado','block','ivaGeneral','Factura\x20cargada\x20exitosamente','localeCompare','Por\x20favor,\x20ingrese\x20un\x20monto\x20deseado\x20válido\x20en\x20el\x20popup.','.input-descripcion','504iEGvTZ','div','273917LTDxAs','application/json','productos-list','left','message','\x22\x20step=\x220.01\x22\x20oninput=\x22calcularTotal(this)\x22\x20onwheel=\x22ajustarPrecioUnitario(event,\x20this)\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-total\x22\x20value=\x22','popupProveedor','precioTotal','input-descripcion','classList','getAttribute','plantillas/','nombre','createElement','440685CfDQBx','toLowerCase','querySelectorAll','1562340xecUpG','84Dharyo','_Total_','descripcion','\x22\x20step=\x220.01\x22\x20oninput=\x22calcularTotal(this)\x22\x20onwheel=\x22ajustarPrecioUnitario(event,\x20this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-total\x22\x20value=\x22','clear','confirmarGuardarFactura','pageY','clientY','round','status','\x0a\x0a</datalist>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-unitario\x22\x20placeholder=\x220.00\x22\x20step=\x220.01\x22\x20oninput=\x22calcularTotal(this)\x22\x20onwheel=\x22ajustarPrecioUnitario(event,\x20this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-total\x22\x20placeholder=\x220.00\x22\x20step=\x220.01\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-total-con-descuento\x22\x20placeholder=\x220.00\x22\x20step=\x220.01\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22input-exento\x22\x20onchange=\x22actualizarResumenGeneral()\x22>\x20E\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-eliminar\x22\x20onclick=\x22eliminarFila(this)\x22>X</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','error','\x22\x20readonly>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-total-con-descuento\x22\x20value=\x22','.input-total-con-descuento','productContainer','top','iva','display','subtotal','map','setItem','totalAPagar','DOMContentLoaded','getBoundingClientRect','onmousedown','factorAjuste:','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-unitario\x22\x20value=\x22','match','none','popupFecha','className','El\x20total\x20actual\x20es\x20cero.\x20No\x20se\x20puede\x20ajustar.','precio','innerHTML','endsWith','.json','\x0a\x0a<input\x20type=\x22number\x22\x20class=\x22input-cantidad\x22\x20placeholder=\x220\x22\x20min=\x220\x22\x20oninput=\x22calcularTotal(this)\x22>\x0a\x0a<input\x20type=\x22text\x22\x20class=\x22input-descripcion\x22\x20placeholder=\x22Descripción\x20del\x20producto\x22\x20list=\x22productos-list\x22>\x0a\x0a<datalist\x20id=\x22productos-list\x22>\x0a\x0a\x20\x20\x20\x20','href','file','addEventListener','deltaY','onmouseup','accept','data-retencion','POST','popupRetencion','nroOperacion','Por\x20favor,\x20seleccione\x20un\x20proveedor\x20y\x20ingrese\x20un\x20monto\x20deseado\x20válido\x20en\x20el\x20popup.','options','includes','value','log','getRandomApi','input','type','.product-row','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-cantidad\x22\x20value=\x22','text','contains','totalGeneral','join','.input-exento','exentoIVA','proveedorText','Ret:\x20','json','closest','totalConDescuento'];_0x69e2=function(){return _0x5c0303;};return _0x69e2();}function actualizarRetencion(){const _0x536b94=_0x526db8,_0x2454d9=document[_0x536b94(0x1fc)](_0x536b94(0x25b)),_0x3957e4=document[_0x536b94(0x1fc)]('popupRetencion'),_0x356db6=_0x2454d9['selectedOptions'][0x0];if(_0x2454d9[_0x536b94(0x299)]!==''&&_0x2454d9[_0x536b94(0x299)]!==_0x536b94(0x22d)){const _0x1b3595=_0x356db6['getAttribute'](_0x536b94(0x292));_0x3957e4[_0x536b94(0x299)]=_0x1b3595;}}function limpiarLocalStorage(){const _0x165f21=_0x526db8;localStorage[_0x165f21(0x26b)](),console[_0x165f21(0x29a)](_0x165f21(0x21d));}function ajustarPrecios(){const _0x365913=_0x526db8,_0x358fce=localStorage[_0x365913(0x21b)]('montoDeseado');console[_0x365913(0x29a)](_0x365913(0x246),_0x358fce);if(_0x358fce===null){alert(_0x365913(0x296));return;}const _0x373ee2=parseFloat(_0x358fce);console['log']('montoDeseadoFloat:',_0x373ee2);if(_0x373ee2<=0x0){alert(_0x365913(0x251));return;}const _0x4101c1=document['querySelectorAll']('.product-row');let _0x136ee3=0x0,_0x19d40d=0x0;_0x4101c1[_0x365913(0x22c)](_0x49d6bf=>{const _0x21b36e=_0x365913,_0x15c0b1=parseFloat(_0x49d6bf['querySelector'](_0x21b36e(0x244))[_0x21b36e(0x299)])||0x0,_0x1233fc=parseFloat(_0x49d6bf[_0x21b36e(0x219)]('.input-precio-unitario')[_0x21b36e(0x299)])||0x0,_0x4d8a77=_0x49d6bf[_0x21b36e(0x219)](_0x21b36e(0x2a4))[_0x21b36e(0x220)],_0x381d07=_0x15c0b1*_0x1233fc;_0x4d8a77?_0x19d40d+=_0x381d07:_0x136ee3+=_0x381d07;}),console[_0x365913(0x29a)](_0x365913(0x2ae),_0x136ee3),console[_0x365913(0x29a)](_0x365913(0x2b3),_0x19d40d);const _0x1d0957=calcularTotalAPagar(_0x136ee3,_0x19d40d);console[_0x365913(0x29a)]('totalActual:',_0x1d0957);if(_0x1d0957===0x0){alert(_0x365913(0x286));return;}const _0x2de68b=_0x373ee2/_0x1d0957;console[_0x365913(0x29a)](_0x365913(0x280),_0x2de68b),_0x4101c1[_0x365913(0x22c)](_0x11c211=>{const _0xf6f741=_0x365913,_0x3be3fe=_0x11c211[_0xf6f741(0x219)]('.input-precio-unitario'),_0x35d67b=parseFloat(_0x3be3fe['value'])*_0x2de68b;_0x3be3fe['value']=_0x35d67b[_0xf6f741(0x22f)](0x2),calcularTotal(_0x3be3fe);}),actualizarResumenGeneral();}function calcularTotalAPagar(_0x22cab8,_0x2a14b2){const _0x4d0a52=_0x526db8,_0x35ad20=_0x22cab8*0.16,_0x58a125=parseInt(document[_0x4d0a52(0x1fc)](_0x4d0a52(0x222))[_0x4d0a52(0x2b5)][_0x4d0a52(0x282)](/\d+/)[0x0])||0x0,_0x1e1b7d=_0x58a125===0x4b?_0x35ad20*0.25:_0x58a125===0x0?_0x35ad20:0x0,_0x5fc67c=(_0x22cab8+_0x2a14b2)*0.001;return _0x22cab8+_0x2a14b2+_0x1e1b7d-_0x5fc67c;}function toggleProveedorManual(){const _0xb1166b=_0x526db8,_0x1992c9=document[_0xb1166b(0x1fc)]('popupProveedor'),_0x195709=document[_0xb1166b(0x1fc)](_0xb1166b(0x211));_0x1992c9[_0xb1166b(0x299)]===_0xb1166b(0x22d)?_0x195709[_0xb1166b(0x237)][_0xb1166b(0x278)]='block':_0x195709[_0xb1166b(0x237)][_0xb1166b(0x278)]=_0xb1166b(0x283);}function redondear(_0x2e9807,_0x256544=0x2){return Number(Math['round'](_0x2e9807+'e'+_0x256544)+'e-'+_0x256544);}function ajustarPrecio(_0x5a6e3f,_0xafbd15){const _0x5522da=_0x526db8;_0x5a6e3f['preventDefault']();let _0x5ac0ed=parseFloat(_0xafbd15[_0x5522da(0x299)])||0x0;_0x5a6e3f[_0x5522da(0x28f)]<0x0?_0x5ac0ed+=0.01:_0x5ac0ed-=0.01,_0x5ac0ed=Math[_0x5522da(0x26f)](_0x5ac0ed*0x64)/0x64,_0x5ac0ed=Math[_0x5522da(0x215)](0x0,_0x5ac0ed),_0xafbd15['value']=_0x5ac0ed[_0x5522da(0x22f)](0x2),calcularTotal(_0xafbd15);}function eliminarFila(_0x24b0e9){const _0x109082=_0x526db8,_0x39dde2=_0x24b0e9[_0x109082(0x2a9)]('.product-row');_0x39dde2[_0x109082(0x23c)](),actualizarResumenGeneral(),guardarDatos();}function agregarFila(){const _0x3c1b88=_0x526db8,_0xc08b75=document[_0x3c1b88(0x1fc)](_0x3c1b88(0x275)),_0x16228c=document[_0x3c1b88(0x262)](_0x3c1b88(0x254));_0x16228c[_0x3c1b88(0x285)]=_0x3c1b88(0x224),_0x16228c[_0x3c1b88(0x288)]=_0x3c1b88(0x28b)+productosComunes[_0x3c1b88(0x27a)](_0x477011=>_0x3c1b88(0x228)+_0x477011[_0x3c1b88(0x269)]+_0x3c1b88(0x231)+_0x477011[_0x3c1b88(0x287)]+'\x22>')[_0x3c1b88(0x2a3)]('')+_0x3c1b88(0x271),_0xc08b75[_0x3c1b88(0x200)](_0x16228c),actualizarResumenGeneral();}function guardarDatos(){const _0xc6e34b=_0x526db8,_0xcf82c5=document['querySelectorAll'](_0xc6e34b(0x29e)),_0x4cea00=Array[_0xc6e34b(0x2b2)](_0xcf82c5)[_0xc6e34b(0x27a)](_0x4a1931=>{const _0x149653=_0xc6e34b;return{'cantidad':_0x4a1931[_0x149653(0x219)](_0x149653(0x244))[_0x149653(0x299)],'descripcion':_0x4a1931[_0x149653(0x219)](_0x149653(0x252))[_0x149653(0x299)],'precioUnitario':_0x4a1931[_0x149653(0x219)](_0x149653(0x232))[_0x149653(0x299)],'precioTotal':_0x4a1931[_0x149653(0x219)](_0x149653(0x205))[_0x149653(0x299)],'totalConDescuento':_0x4a1931[_0x149653(0x219)](_0x149653(0x274))[_0x149653(0x299)],'exentoIVA':_0x4a1931[_0x149653(0x219)](_0x149653(0x2a4))['checked']};});localStorage[_0xc6e34b(0x27b)](_0xc6e34b(0x223),JSON[_0xc6e34b(0x241)](_0x4cea00));}function mostrarPopup(){const _0x4304be=_0x526db8;document['getElementById'](_0x4304be(0x225))[_0x4304be(0x237)][_0x4304be(0x278)]=_0x4304be(0x221),document['getElementById'](_0x4304be(0x284))[_0x4304be(0x299)]='',document[_0x4304be(0x1fc)]('popupProveedor')[_0x4304be(0x248)]=0x0,document[_0x4304be(0x1fc)](_0x4304be(0x294))[_0x4304be(0x248)]=0x0,document['getElementById'](_0x4304be(0x1f9))[_0x4304be(0x299)]='';const _0x48c3b2=localStorage[_0x4304be(0x21b)](_0x4304be(0x22b));_0x48c3b2?document[_0x4304be(0x1fc)]('popupMontoDeseado')[_0x4304be(0x299)]=_0x48c3b2:document['getElementById'](_0x4304be(0x24c))['value']='';}function ajustarPrecioUnitario(_0x46b24a,_0x4ed849){const _0x5177fa=_0x526db8;_0x46b24a['preventDefault']();let _0x19a53f=parseFloat(_0x4ed849[_0x5177fa(0x299)])||0x0;_0x46b24a[_0x5177fa(0x28f)]<0x0?_0x19a53f+=0.01:_0x19a53f-=0.01,_0x19a53f=Math['round'](_0x19a53f*0x64)/0x64,_0x19a53f=Math[_0x5177fa(0x215)](0x0,_0x19a53f),_0x4ed849[_0x5177fa(0x299)]=_0x19a53f[_0x5177fa(0x22f)](0x2),calcularTotal(_0x4ed849);}function calcularTotal(_0x2aa31b){const _0x22cf18=_0x526db8,_0x33531b=_0x2aa31b[_0x22cf18(0x2a9)]('.product-row'),_0x4103c6=parseFloat(_0x33531b[_0x22cf18(0x219)]('.input-cantidad')[_0x22cf18(0x299)])||0x0,_0x437ef9=parseFloat(_0x33531b[_0x22cf18(0x219)](_0x22cf18(0x232))[_0x22cf18(0x299)])||0x0,_0x6ce865=_0x4103c6*_0x437ef9,_0x52178e=_0x6ce865*0.999;_0x33531b[_0x22cf18(0x219)]('.input-precio-total')[_0x22cf18(0x299)]=_0x6ce865[_0x22cf18(0x22f)](0x2),_0x33531b[_0x22cf18(0x219)]('.input-total-con-descuento')[_0x22cf18(0x299)]=_0x52178e[_0x22cf18(0x22f)](0x2),actualizarResumenGeneral();}function actualizarResumenGeneral(){const _0x2ecd94=_0x526db8,_0xebf26f=document[_0x2ecd94(0x265)](_0x2ecd94(0x29e));let _0x45fbec=0x0,_0x200c07=0x0;_0xebf26f[_0x2ecd94(0x22c)](_0x1ed3f6=>{const _0x5933e5=_0x2ecd94,_0x57f5d0=parseFloat(_0x1ed3f6[_0x5933e5(0x219)](_0x5933e5(0x205))[_0x5933e5(0x299)])||0x0,_0x475f10=_0x1ed3f6[_0x5933e5(0x219)](_0x5933e5(0x2a4));_0x45fbec+=_0x57f5d0,_0x475f10[_0x5933e5(0x220)]&&(_0x200c07+=_0x57f5d0);});const _0x3ed2ad=(_0x45fbec-_0x200c07)*0.16,_0x54fa10=_0x45fbec+_0x3ed2ad;document[_0x2ecd94(0x1fc)]('subtotalGeneral')['innerText']=_0x45fbec[_0x2ecd94(0x22f)](0x2),document[_0x2ecd94(0x1fc)](_0x2ecd94(0x236))[_0x2ecd94(0x2b5)]=_0x200c07[_0x2ecd94(0x22f)](0x2),document[_0x2ecd94(0x1fc)](_0x2ecd94(0x24e))[_0x2ecd94(0x2b5)]=_0x3ed2ad[_0x2ecd94(0x22f)](0x2),document['getElementById'](_0x2ecd94(0x2a2))[_0x2ecd94(0x2b5)]=_0x54fa10[_0x2ecd94(0x22f)](0x2);const _0x3e0179=document['getElementById'](_0x2ecd94(0x222))['innerText'],_0x46178b=parseInt(_0x3e0179[_0x2ecd94(0x282)](/\d+/)[0x0])||0x0;let _0x48476b=0x0;if(_0x46178b===0x4b)_0x48476b=_0x3ed2ad*0.25;else _0x46178b===0x0&&(_0x48476b=_0x3ed2ad);const _0x345037=_0x45fbec+_0x48476b,_0x467592=_0x45fbec*0.001,_0x36ad79=_0x45fbec-_0x467592+_0x48476b;document[_0x2ecd94(0x1fc)](_0x2ecd94(0x242))['innerText']=_0x48476b['toFixed'](0x2),document[_0x2ecd94(0x1fc)]('pagoSinTimbre')[_0x2ecd94(0x2b5)]=_0x345037[_0x2ecd94(0x22f)](0x2),document[_0x2ecd94(0x1fc)](_0x2ecd94(0x1f8))[_0x2ecd94(0x2b5)]=_0x467592[_0x2ecd94(0x22f)](0x2),document[_0x2ecd94(0x1fc)](_0x2ecd94(0x27c))[_0x2ecd94(0x2b5)]=_0x36ad79[_0x2ecd94(0x22f)](0x2);}const plantillasFolder=_0x526db8(0x260),plantillas=[];fetch(plantillasFolder)[_0x526db8(0x1f5)](_0x2387cc=>_0x2387cc['text']())[_0x526db8(0x1f5)](_0x3ff234=>{const _0x4a19c4=_0x526db8,_0x5e3eec=_0x3ff234[_0x4a19c4(0x214)]('\x0a');_0x5e3eec[_0x4a19c4(0x22c)](_0x364102=>{const _0x4f7bba=_0x4a19c4;_0x364102[_0x4f7bba(0x289)](_0x4f7bba(0x1ed))&&plantillas[_0x4f7bba(0x210)]({'nombre':_0x364102[_0x4f7bba(0x2b4)](_0x4f7bba(0x1ed),''),'ruta':plantillasFolder+_0x364102});});const _0x3989be=document['getElementById']('plantilla-select');_0x3989be[_0x4a19c4(0x288)]='',plantillas['forEach'](_0x1817cf=>{const _0x2b5e79=_0x4a19c4,_0x1f0d31=document[_0x2b5e79(0x262)](_0x2b5e79(0x212));_0x1f0d31['value']=_0x1817cf['nombre'],_0x1f0d31[_0x2b5e79(0x2a0)]=_0x1817cf['nombre'],_0x3989be[_0x2b5e79(0x200)](_0x1f0d31);});});const select=document['getElementById'](_0x526db8(0x234));plantillas[_0x526db8(0x22c)](_0x22e6ad=>{const _0x42ce37=_0x526db8,_0x3b3e6d=document[_0x42ce37(0x262)](_0x42ce37(0x212));_0x3b3e6d[_0x42ce37(0x299)]=_0x22e6ad[_0x42ce37(0x261)],_0x3b3e6d[_0x42ce37(0x2a0)]=_0x22e6ad[_0x42ce37(0x261)],select[_0x42ce37(0x200)](_0x3b3e6d);});function _0x3f0a(_0xbe39ae,_0x264860){const _0x69e22d=_0x69e2();return _0x3f0a=function(_0x3f0a21,_0x14b398){_0x3f0a21=_0x3f0a21-0x1ed;let _0x5e2dc1=_0x69e22d[_0x3f0a21];return _0x5e2dc1;},_0x3f0a(_0xbe39ae,_0x264860);}function cargarDatos(){const _0x2a943a=_0x526db8,_0x247f7b=JSON[_0x2a943a(0x23f)](localStorage[_0x2a943a(0x21b)]('productos'));_0x247f7b&&_0x247f7b[_0x2a943a(0x22c)](_0x50992f=>{const _0x560aff=_0x2a943a,_0x2d50b7=document[_0x560aff(0x1fc)](_0x560aff(0x275)),_0x51b0d1=document[_0x560aff(0x262)](_0x560aff(0x254));_0x51b0d1['className']=_0x560aff(0x224),_0x51b0d1['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-cantidad\x22\x20value=\x22'+_0x50992f[_0x560aff(0x1ff)]+'\x22\x20oninput=\x22calcularTotal(this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22input-descripcion\x22\x20value=\x22'+_0x50992f['descripcion']+_0x560aff(0x281)+_0x50992f['precioUnitario']+_0x560aff(0x26a)+_0x50992f[_0x560aff(0x25c)]+_0x560aff(0x24a)+_0x50992f[_0x560aff(0x2aa)]+_0x560aff(0x21a)+(_0x50992f[_0x560aff(0x2a5)]?_0x560aff(0x220):'')+'\x20onchange=\x22actualizarResumenGeneral()\x22>\x20E\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-eliminar\x22\x20onclick=\x22eliminarFila(this)\x22>X</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x2d50b7[_0x560aff(0x200)](_0x51b0d1);});}async function guardarFacturaSheety(){const _0x52a84c=_0x526db8,_0x4249b7=document[_0x52a84c(0x1fc)](_0x52a84c(0x206))[_0x52a84c(0x2b5)][_0x52a84c(0x2b4)]('OP:\x20','');if(!_0x4249b7){alert('Por\x20favor,\x20ingrese\x20un\x20número\x20de\x20operación\x20válido.');return;}const _0x17f24a=document[_0x52a84c(0x1fc)]('fecha')[_0x52a84c(0x299)],_0x36ef00=document['getElementById']('proveedorText')[_0x52a84c(0x2b5)],_0x393284=document['getElementById'](_0x52a84c(0x209))[_0x52a84c(0x2b5)],_0x46ccbc=document[_0x52a84c(0x1fc)]('exentoGeneral')[_0x52a84c(0x2b5)],_0x4b7b18=document[_0x52a84c(0x1fc)]('ivaGeneral')['innerText'],_0x2f4f68=document[_0x52a84c(0x1fc)](_0x52a84c(0x2a2))['innerText'],_0x50822a=document[_0x52a84c(0x1fc)](_0x52a84c(0x242))[_0x52a84c(0x2b5)],_0xe35f55=document['getElementById'](_0x52a84c(0x1f8))[_0x52a84c(0x2b5)],_0x5b3525=document[_0x52a84c(0x1fc)](_0x52a84c(0x27c))[_0x52a84c(0x2b5)],_0xbd4d9=document[_0x52a84c(0x1fc)](_0x52a84c(0x222))[_0x52a84c(0x2b5)],_0x52172b=Array[_0x52a84c(0x2b2)](document[_0x52a84c(0x265)](_0x52a84c(0x29e)))[_0x52a84c(0x27a)](_0x4e03c9=>({'cantidad':_0x4e03c9[_0x52a84c(0x219)]('.input-cantidad')[_0x52a84c(0x299)],'descripcion':_0x4e03c9['querySelector'](_0x52a84c(0x252))['value'],'precioUnitario':_0x4e03c9[_0x52a84c(0x219)](_0x52a84c(0x232))['value'],'total':_0x4e03c9[_0x52a84c(0x219)](_0x52a84c(0x205))['value'],'exento':_0x4e03c9[_0x52a84c(0x219)](_0x52a84c(0x2a4))[_0x52a84c(0x220)]})),_0x434101={'sheet1':{'nroOperacion':_0x4249b7,'fecha':_0x17f24a,'proveedor':_0x36ef00,'subtotalGeneral':_0x393284,'exentoGeneral':_0x46ccbc,'ivaGeneral':_0x4b7b18,'totalGeneral':_0x2f4f68,'ivaAPagar':_0x50822a,'timbreFiscal':_0xe35f55,'totalAPagar':_0x5b3525,'productos':JSON['stringify'](_0x52172b),'retencion':_0xbd4d9}};try{const _0x52e41c=API_FACTURA[_0x52a84c(0x29b)](),_0x4f3973=await fetch(_0x52e41c,{'method':_0x52a84c(0x293),'headers':{'Content-Type':_0x52a84c(0x256)},'body':JSON[_0x52a84c(0x241)](_0x434101)});if(_0x4f3973['ok'])alert(_0x52a84c(0x243)+_0x4249b7);else throw new Error(_0x52a84c(0x1ef));}catch(_0x3cce7f){console['error']('Error:',_0x3cce7f),alert(_0x52a84c(0x2b0)+_0x3cce7f['message']);}document[_0x52a84c(0x1fc)](_0x52a84c(0x213))[_0x52a84c(0x237)]['display']=_0x52a84c(0x283);}function mostrarPopupId(){return new Promise(_0x2c3dc4=>{const _0x24abe8=_0x3f0a;document[_0x24abe8(0x1fc)](_0x24abe8(0x20d))[_0x24abe8(0x237)][_0x24abe8(0x278)]=_0x24abe8(0x221),window[_0x24abe8(0x26c)]=function(){const _0x1c676a=_0x24abe8,_0x1b457e=document[_0x1c676a(0x1fc)]('idFactura')[_0x1c676a(0x299)];_0x1b457e?(cerrarPopupId(),_0x2c3dc4(_0x1b457e)):alert(_0x1c676a(0x203));},window['cerrarPopupId']=function(){const _0x27d6a5=_0x24abe8;document[_0x27d6a5(0x1fc)](_0x27d6a5(0x20d))[_0x27d6a5(0x237)][_0x27d6a5(0x278)]=_0x27d6a5(0x283),_0x2c3dc4(null);};});}function copiarAlPortapapeles(){const _0x20a340=_0x526db8,_0xa68f27=document[_0x20a340(0x1fc)](_0x20a340(0x1fa))['value'],_0x46c524=document['getElementById']('fecha')['value'],_0x344300=document[_0x20a340(0x1fc)](_0x20a340(0x2a6))[_0x20a340(0x2b5)],_0x29f073=document[_0x20a340(0x1fc)](_0x20a340(0x206))[_0x20a340(0x2b5)],_0x42f081=document[_0x20a340(0x1fc)](_0x20a340(0x209))[_0x20a340(0x2b5)],_0x4032ec=document[_0x20a340(0x1fc)](_0x20a340(0x236))[_0x20a340(0x2b5)],_0xf1ef05=document['getElementById']('ivaGeneral')[_0x20a340(0x2b5)],_0x34e40b=document[_0x20a340(0x1fc)]('totalGeneral')[_0x20a340(0x2b5)],_0x747093=document[_0x20a340(0x1fc)](_0x20a340(0x242))[_0x20a340(0x2b5)],_0x1afdc8=document[_0x20a340(0x1fc)](_0x20a340(0x1f8))[_0x20a340(0x2b5)],_0x359b40=document['getElementById']('totalAPagar')[_0x20a340(0x2b5)],_0x39e02a=document[_0x20a340(0x1fc)](_0x20a340(0x222))[_0x20a340(0x2b5)],_0x286f69=Array[_0x20a340(0x2b2)](document[_0x20a340(0x265)](_0x20a340(0x29e)))[_0x20a340(0x27a)](_0x12fc8f=>({'cantidad':_0x12fc8f['querySelector'](_0x20a340(0x244))['value'],'descripcion':_0x12fc8f['querySelector'](_0x20a340(0x252))[_0x20a340(0x299)],'precioUnitario':_0x12fc8f[_0x20a340(0x219)](_0x20a340(0x232))['value'],'total':_0x12fc8f[_0x20a340(0x219)]('.input-precio-total')[_0x20a340(0x299)],'exento':_0x12fc8f['querySelector']('.input-exento')[_0x20a340(0x220)]})),_0x117460=_0xa68f27+'\x09'+_0x46c524+'\x09'+_0x344300+'\x09'+_0x29f073+'\x09'+_0x42f081+'\x09'+_0x4032ec+'\x09'+_0xf1ef05+'\x09'+_0x34e40b+'\x09'+_0x747093+'\x09'+_0x1afdc8+'\x09'+_0x359b40+'\x09'+JSON['stringify'](_0x286f69)+'\x09'+_0x39e02a+'\x09';navigator['clipboard'][_0x20a340(0x208)](_0x117460)['then'](()=>{const _0x7260bb=_0x20a340;alert(_0x7260bb(0x1f0));})[_0x20a340(0x23e)](_0x3cf8fb=>{const _0x4f19d6=_0x20a340;console[_0x4f19d6(0x272)](_0x4f19d6(0x21c),_0x3cf8fb);});}async function buscarFacturaSheety(){const _0xa4fcad=_0x526db8,_0x1d3f9d=prompt(_0xa4fcad(0x20f));if(!_0x1d3f9d)return;try{const _0x3c6a05=API_FACTURA[_0xa4fcad(0x29b)](),_0xee8320=await fetch(_0x3c6a05);if(!_0xee8320['ok'])throw new Error(_0xa4fcad(0x2ab)+_0xee8320[_0xa4fcad(0x270)]+'\x20'+_0xee8320[_0xa4fcad(0x1f1)]);const _0x38cc83=await _0xee8320[_0xa4fcad(0x2a8)](),_0x8b3e86=_0x38cc83[_0xa4fcad(0x239)][_0xa4fcad(0x2b6)](_0x4db00c=>_0x4db00c[_0xa4fcad(0x295)][_0xa4fcad(0x264)]()===_0x1d3f9d[_0xa4fcad(0x264)]());if(_0x8b3e86['length']>0x0){const _0x1e6abf=_0x8b3e86[0x0];document['getElementById'](_0xa4fcad(0x20a))[_0xa4fcad(0x299)]=_0x1e6abf[_0xa4fcad(0x20a)],document[_0xa4fcad(0x1fc)](_0xa4fcad(0x2a6))[_0xa4fcad(0x2b5)]=_0x1e6abf['proveedor'],document['getElementById'](_0xa4fcad(0x206))[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x295)],document[_0xa4fcad(0x1fc)](_0xa4fcad(0x209))[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x209)],document[_0xa4fcad(0x1fc)](_0xa4fcad(0x236))['innerText']=_0x1e6abf[_0xa4fcad(0x236)],document[_0xa4fcad(0x1fc)](_0xa4fcad(0x24e))['innerText']=_0x1e6abf[_0xa4fcad(0x24e)],document[_0xa4fcad(0x1fc)]('totalGeneral')['innerText']=_0x1e6abf[_0xa4fcad(0x2a2)],document[_0xa4fcad(0x1fc)]('ivaAPagar')[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x242)],document[_0xa4fcad(0x1fc)]('timbreFiscal')[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x1f8)],document[_0xa4fcad(0x1fc)]('totalAPagar')[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x27c)],document[_0xa4fcad(0x1fc)]('retencionText')[_0xa4fcad(0x2b5)]=_0x1e6abf[_0xa4fcad(0x235)];const _0x4adefd=document[_0xa4fcad(0x1fc)](_0xa4fcad(0x275));_0x4adefd['innerHTML']='';const _0xae350c=JSON[_0xa4fcad(0x23f)](_0x1e6abf[_0xa4fcad(0x223)]);_0xae350c['forEach'](_0x102575=>{agregarFilaConProducto(_0x102575);}),actualizarResumenGeneral(),alert(_0xa4fcad(0x24f));}else alert(_0xa4fcad(0x21e)+_0x1d3f9d);}catch(_0x3a2400){console['error'](_0xa4fcad(0x24b),_0x3a2400),alert('Error\x20al\x20buscar\x20la\x20factura:\x20'+_0x3a2400[_0xa4fcad(0x259)]);}document['getElementById'](_0xa4fcad(0x213))[_0xa4fcad(0x237)]['display']='none';}function agregarFilaConProducto(_0x20bfdf){const _0x43b182=_0x526db8,_0x1c23b1=document[_0x43b182(0x1fc)]('productContainer'),_0x2da206=document[_0x43b182(0x262)](_0x43b182(0x254));_0x2da206[_0x43b182(0x285)]='product-row',_0x2da206[_0x43b182(0x288)]=_0x43b182(0x1fb)+_0x20bfdf[_0x43b182(0x1ff)]+_0x43b182(0x240)+_0x20bfdf[_0x43b182(0x269)]+_0x43b182(0x249)+_0x20bfdf[_0x43b182(0x218)]+'\x22\x20step=\x220.01\x22\x20oninput=\x22calcularTotal(this)\x22\x20onwheel=\x22ajustarPrecioUnitario(event,\x20this)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-precio-total\x22\x20value=\x22'+_0x20bfdf['total']+'\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20class=\x22input-total-con-descuento\x22\x20value=\x22'+(_0x20bfdf[_0x43b182(0x207)]*0.999)[_0x43b182(0x22f)](0x2)+_0x43b182(0x23b)+(_0x20bfdf[_0x43b182(0x23d)]?_0x43b182(0x220):'')+_0x43b182(0x204),_0x1c23b1[_0x43b182(0x200)](_0x2da206);}function cargarFacturaDesdeArchivo(){const _0x3cc183=_0x526db8,_0x4a7d98=document[_0x3cc183(0x262)](_0x3cc183(0x29c));_0x4a7d98['type']='file',_0x4a7d98[_0x3cc183(0x291)]='.json',_0x4a7d98['onchange']=function(_0x80382){const _0x4ce548=_0x3cc183,_0x376f4d=_0x80382['target'][_0x4ce548(0x201)][0x0],_0x25a1a4=new FileReader();_0x25a1a4[_0x4ce548(0x22e)]=function(_0x2166da){const _0x4568f2=_0x4ce548,_0x5bf147=JSON[_0x4568f2(0x23f)](_0x2166da[_0x4568f2(0x245)]['result']);cargarFacturaEnInterfaz(_0x5bf147);},_0x25a1a4[_0x4ce548(0x230)](_0x376f4d);},_0x4a7d98[_0x3cc183(0x21f)]();}function guardarFacturaEnArchivo(){const _0x511b81=_0x526db8,_0x44fc37=obtenerDatosFactura(),_0x2ecaa6=JSON[_0x511b81(0x241)](_0x44fc37,null,0x2),_0x5517cd=new Blob([_0x2ecaa6],{'type':_0x511b81(0x256)}),_0x10aa29=URL[_0x511b81(0x1f6)](_0x5517cd),_0x3aa690=document[_0x511b81(0x262)]('a');_0x3aa690[_0x511b81(0x28c)]=_0x10aa29,_0x3aa690[_0x511b81(0x1f3)]=_0x511b81(0x20b)+_0x44fc37[_0x511b81(0x1fe)]+'_'+_0x44fc37[_0x511b81(0x295)]+_0x511b81(0x268)+_0x44fc37['totalAPagar']+_0x511b81(0x28a),_0x3aa690['click'](),URL['revokeObjectURL'](_0x10aa29);}function obtenerDatosFactura(){const _0x1ffd5c=_0x526db8,_0xfd8de0=Array['from'](document['querySelectorAll']('.product-row'))['map'](_0x59d27d=>({'cantidad':_0x59d27d[_0x1ffd5c(0x219)]('.input-cantidad')[_0x1ffd5c(0x299)],'descripcion':_0x59d27d[_0x1ffd5c(0x219)]('.input-descripcion')[_0x1ffd5c(0x299)],'precioUnitario':_0x59d27d['querySelector'](_0x1ffd5c(0x232))['value'],'precioTotal':_0x59d27d[_0x1ffd5c(0x219)](_0x1ffd5c(0x205))[_0x1ffd5c(0x299)],'totalConDescuento':_0x59d27d[_0x1ffd5c(0x219)](_0x1ffd5c(0x274))[_0x1ffd5c(0x299)],'exento':_0x59d27d['querySelector'](_0x1ffd5c(0x2a4))['checked']}));return{'fecha':document['getElementById'](_0x1ffd5c(0x20a))['value'],'proveedor':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x2a6))[_0x1ffd5c(0x2b5)],'retencion':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x222))[_0x1ffd5c(0x2b5)],'nroOperacion':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x206))[_0x1ffd5c(0x2b5)],'productos':_0xfd8de0,'subtotal':document[_0x1ffd5c(0x1fc)]('subtotalGeneral')['innerText'],'exento':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x236))[_0x1ffd5c(0x2b5)],'iva':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x24e))['innerText'],'total':document[_0x1ffd5c(0x1fc)]('totalGeneral')[_0x1ffd5c(0x2b5)],'ivaAPagar':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x242))[_0x1ffd5c(0x2b5)],'timbreFiscal':document[_0x1ffd5c(0x1fc)](_0x1ffd5c(0x1f8))[_0x1ffd5c(0x2b5)],'totalAPagar':document[_0x1ffd5c(0x1fc)]('totalAPagar')[_0x1ffd5c(0x2b5)]};}function cargarFacturaEnInterfaz(_0x4d3550){const _0x3beba7=_0x526db8;document[_0x3beba7(0x1fc)]('fecha')[_0x3beba7(0x299)]=_0x4d3550[_0x3beba7(0x20a)],document[_0x3beba7(0x1fc)]('proveedorText')[_0x3beba7(0x2b5)]=_0x4d3550['proveedor'],document['getElementById']('retencionText')[_0x3beba7(0x2b5)]=_0x4d3550['retencion'],document[_0x3beba7(0x1fc)](_0x3beba7(0x206))[_0x3beba7(0x2b5)]=_0x4d3550['nroOperacion'];const _0x440a55=document[_0x3beba7(0x1fc)]('productContainer');_0x440a55['innerHTML']='',_0x4d3550[_0x3beba7(0x223)]['forEach'](_0xfa5c43=>{const _0x175c38=_0x3beba7,_0x7800cd=document[_0x175c38(0x262)](_0x175c38(0x254));_0x7800cd[_0x175c38(0x285)]=_0x175c38(0x224),_0x7800cd[_0x175c38(0x288)]=_0x175c38(0x29f)+_0xfa5c43[_0x175c38(0x1ff)]+_0x175c38(0x1f7)+_0xfa5c43[_0x175c38(0x269)]+_0x175c38(0x247)+_0xfa5c43[_0x175c38(0x218)]+_0x175c38(0x25a)+_0xfa5c43[_0x175c38(0x25c)]+_0x175c38(0x273)+_0xfa5c43[_0x175c38(0x2aa)]+_0x175c38(0x1ee)+(_0xfa5c43[_0x175c38(0x23d)]?'checked':'')+_0x175c38(0x2ad),_0x440a55[_0x175c38(0x200)](_0x7800cd);}),document[_0x3beba7(0x1fc)](_0x3beba7(0x209))[_0x3beba7(0x2b5)]=_0x4d3550[_0x3beba7(0x279)],document[_0x3beba7(0x1fc)]('exentoGeneral')['innerText']=_0x4d3550[_0x3beba7(0x23d)],document[_0x3beba7(0x1fc)](_0x3beba7(0x24e))[_0x3beba7(0x2b5)]=_0x4d3550[_0x3beba7(0x277)],document[_0x3beba7(0x1fc)]('totalGeneral')['innerText']=_0x4d3550['total'],document[_0x3beba7(0x1fc)](_0x3beba7(0x242))[_0x3beba7(0x2b5)]=_0x4d3550['ivaAPagar'],document[_0x3beba7(0x1fc)](_0x3beba7(0x1f8))[_0x3beba7(0x2b5)]=_0x4d3550[_0x3beba7(0x1f8)],document[_0x3beba7(0x1fc)]('totalAPagar')[_0x3beba7(0x2b5)]=_0x4d3550[_0x3beba7(0x27c)],actualizarResumenGeneral(),cerrarPopupArchivos();}function mostrarPopupArchivos(){const _0x3aab23=_0x526db8;document[_0x3aab23(0x1fc)]('popupArchivos')[_0x3aab23(0x237)]['display']=_0x3aab23(0x24d);}function cerrarPopupArchivos(){const _0x2c1dae=_0x526db8;document['getElementById'](_0x2c1dae(0x227))[_0x2c1dae(0x237)][_0x2c1dae(0x278)]=_0x2c1dae(0x283);}function mostrarPopupSheety(){const _0x36ba69=_0x526db8;document[_0x36ba69(0x1fc)](_0x36ba69(0x213))['style'][_0x36ba69(0x278)]=_0x36ba69(0x24d);}function cerrarPopupSheety(){const _0x1e121b=_0x526db8;document[_0x1e121b(0x1fc)](_0x1e121b(0x213))['style'][_0x1e121b(0x278)]='none';}function cargarProveedores(){const _0x2fdeb1=_0x526db8,_0x374024=document[_0x2fdeb1(0x1fc)](_0x2fdeb1(0x25b)),_0x5f0023=_0x374024[_0x2fdeb1(0x288)];proveedores['sort']((_0x4a4476,_0x7fed6a)=>_0x4a4476[_0x2fdeb1(0x261)][_0x2fdeb1(0x250)](_0x7fed6a[_0x2fdeb1(0x261)]));const _0xed9427=proveedores['map'](_0x56532a=>_0x2fdeb1(0x228)+_0x56532a['nombre']+_0x2fdeb1(0x226)+_0x56532a[_0x2fdeb1(0x202)]+'\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-retencion=\x22'+_0x56532a[_0x2fdeb1(0x235)]+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x56532a[_0x2fdeb1(0x261)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20</option>')[_0x2fdeb1(0x2a3)]('');_0x374024['innerHTML']=_0x5f0023+_0xed9427;}document[_0x526db8(0x28e)](_0x526db8(0x27d),function(){cargarProveedores();});