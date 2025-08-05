import React from "react";

const Theme_V_iii = () => {
  return (
    <section className="theme_V_item">
      {/* 常見焦段分類與特色 */}
      <h3>常見焦段分類與特色</h3>
      <table>
        <thead>
          <tr>
            <th>類型</th>
            <th>焦段範圍</th>
            <th>視角特性</th>
            <th>適合拍攝</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>廣角</td>
            <td>14–24mm</td>
            <td>誇張透視、大畫面</td>
            <td>建築、風景、星空</td>
          </tr>
          <tr>
            <td>廣角</td>
            <td>24–35mm </td>
            <td>空間感強、背景多</td>
            <td>街拍、環境人像</td>
          </tr>
          <tr>
            <td>標準</td>
            <td>35–70mm</td>
            <td>自然視角、接近人眼</td>
            <td>人像、日常拍攝</td>
          </tr>
          <tr>
            <td>中望遠 </td>
            <td>70–135mm</td>
            <td>壓縮感強、主體突出</td>
            <td>特寫、人像、美食</td>
          </tr>
          <tr>
            <td>望遠 / 超望遠</td>
            <td>135mm</td>
            <td>拉近遠方細節以上</td>
            <td>運動、野生動物、月亮</td>
          </tr>
          <tr>
            <td>微距鏡</td>
            <td>特殊設計</td>
            <td>極近距離拍攝放大細節</td>
            <td>花卉、昆蟲、商品細節</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Theme_V_iii;
