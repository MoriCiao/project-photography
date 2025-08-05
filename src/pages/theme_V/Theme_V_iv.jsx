import React from "react";

const Theme_V_iv = () => {
  return (
    <section className="theme_V_item">
      {/* 焦段與「視角變化」 */}
      <h3>焦段與「視角變化」</h3>
      <p>不同焦段除了改變拍攝距離，還會影響視覺上的「透視感」與背景表現：</p>
      <table>
        <thead>
          <tr>
            <th>焦段</th>
            <th>視覺效果</th>
            <th>主體與背景的關係</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16mm（超廣角）</td>
            <td>畫面誇張變形、景深深</td>
            <td>主體小，背景占據大部分</td>
          </tr>
          <tr>
            <td>35mm（廣角）</td>
            <td>場景完整、有空間感</td>
            <td>適合街拍、日常</td>
          </tr>
          <tr>
            <td>50mm（標準）</td>
            <td>接近人眼視角</td>
            <td>主體自然、適中背景</td>
          </tr>
          <tr>
            <td>85mm（中望遠）</td>
            <td>壓縮感強、背景虛化好看 </td>
            <td>常見於人像攝影</td>
          </tr>
          <tr>
            <td>200mm+（望遠）</td>
            <td>強烈壓縮、遠距離捕捉</td>
            <td>讓遠方主體更近、背景更近似</td>
          </tr>
        </tbody>
      </table>
      <p>
        小建議：搭配對比圖片讓訪客看到 35mm vs 85mm vs 200mm
        拍同一主體的效果差異。
      </p>
    </section>
  );
};

export default Theme_V_iv;
