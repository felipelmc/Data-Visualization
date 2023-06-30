import define1 from "./26670360aa6f343b@209.js";
import define2 from "./a2166040e5fb39a6@229.js";

function _1(md){return(
md`# Assignment1`
)}

function _dataset1(FileAttachment){return(
FileAttachment("linechart.csv").csv()
)}

function _5(printTable,dataset1){return(
printTable(dataset1.slice(0, 12))
)}

function _dataset2(FileAttachment){return(
FileAttachment("barchart.csv").csv()
)}

function _dataset3(FileAttachment){return(
FileAttachment("straightline.csv").csv()
)}

function _8(vl,dataset1,dataset2,dataset3)
{
  const linechart = vl.markLine({color: 'firebrick'})
                      .data(dataset1)
                      .encode(
                        vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                   'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                        vl.y().average('Dif Percentual')
                      );

  const area = vl.markArea({opacity: 0.4})
                 .data(dataset1)
                 .encode(
                   vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                              'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']).title(null),
                   vl.y2().max('Dif Percentual'),
                   vl.y().min('Dif Percentual').title(['Média da Variação Percentual', 'de homicídios nas cidades'])
                 );

  const barchart = vl.markBar({opacity: 0.7})
                     .data(dataset2)
                     .encode(
                       vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']).title('Mês'),
                       vl.y().fieldQ('Dif Percentual').title(['Variação Percentual', 'do total de homicídios'])
                     );

  const straightLine = vl.markLine({opacity: 0.3})
                         .data(dataset3)
                         .encode(
                           vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                           vl.y().fieldQ('Value')
                         );
  
  const upside = vl.layer(linechart.width(700).height(600), area)
           .title({
             text: 'Há um padrão de variação da criminalidade ao longo dos meses?',
             subtitle: 'A área em azul representa o máximo e o mínimo da variação em cada mês'
            })

  const downside = vl.layer(barchart.width(700).height(250), straightLine)

  return vl.vconcat(upside, downside)
    
  .render();
}


function _9(vl,dataset1,dataset2,dataset3)
{
  const barchart = vl.markBar({color: 'firebrick'})
                      .data(dataset1)
                      .encode(
                        vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                   'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                        vl.y().average('Dif Percentual')
                      );

  const area = vl.markLine({opacity: 0.8})
                 .data(dataset1)
                 .encode(
                   vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                              'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']).title(null),
                   vl.y2().max('Dif Percentual'),
                   vl.y().min('Dif Percentual').title(['Média da Variação Percentual', 'de homicídios nas cidades'])
                 );

  const point01 = vl.markPoint({fill: true, color: 'firebrick'})
                  .data(dataset1)
                  .encode(
                    vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                               'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                    vl.y().max('Dif Percentual')
                  );
  
  const point02 = vl.markPoint({fill: true, color: 'firebrick'})
                  .data(dataset1)
                  .encode(
                    vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                               'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                    vl.y().min('Dif Percentual')
                  );

  const linechart = vl.markLine({opacity: 0.7, color: 'firebrick', strokeWidth:3})
                     .data(dataset2)
                     .encode(
                       vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']).title('Mês'),
                       vl.y().fieldQ('Dif Percentual').title(['Variação Percentual', 'do total de homicídios'])
                     );

  const straightLine = vl.markLine({opacity: 0.4, color: 'black'})
                         .data(dataset3)
                         .encode(
                           vl.x().fieldN('Mes').sort(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                                                      'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']),
                           vl.y().fieldQ('Value')
                         );
    
  const upside = vl.layer(barchart.width(800).height(700), area, point01, point02)
           .title({
             text: 'Há um padrão de variação da criminalidade ao longo dos meses?',
             subtitle: ['Os pontos acima e abaixo das barras representam, respectivamente,', 
                        'as maiores variações percentuais de acréscimo e decréscimo']
            })

  const downside = vl.layer(linechart.width(800).height(300), straightLine)

  return vl.vconcat(upside, downside)
    
  .render();
}


export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["linechart.csv", {url: new URL("./files/36479284a2f147bc39621bc8c93fbc9f910a06ba8498ae84a48d22d1e96d5b351fbf917a1324cadd693945a46f4b925aa5d74a0e0c9d2a05f1b720f71386d028.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["barchart.csv", {url: new URL("./files/41b4d7a64e0708889ffaa61d4d6ec97544c1023a0d7eecda103da127dcedf926e4b5037dc714dc89007701bab3143423eed2a47d6ceed036fd36743dce1bee51.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["straightline.csv", {url: new URL("./files/aebd016d1a8171294781e1502771b2c16e5ee685b1e7ec154b9e98c5062231f0d8454bee5c20b20cf3c1e3d868ede71973f70038c8d36aa450e9ecd9abac45fe.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("vl", child1);
  const child2 = runtime.module(define2);
  main.import("fromColumns", child2);
  main.import("printTable", child2);
  main.variable(observer("dataset1")).define("dataset1", ["FileAttachment"], _dataset1);
  main.variable(observer()).define(["printTable","dataset1"], _5);
  main.variable(observer("dataset2")).define("dataset2", ["FileAttachment"], _dataset2);
  main.variable(observer("dataset3")).define("dataset3", ["FileAttachment"], _dataset3);
  main.variable(observer()).define(["vl","dataset1","dataset2","dataset3"], _8);
  main.variable(observer()).define(["vl","dataset1","dataset2","dataset3"], _9);
  return main;
}
