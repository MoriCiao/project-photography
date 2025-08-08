import React from "react";

const tr_style =
  "odd:bg-black/50 even:bg-black-900/80 hover:odd:bg-blue-800/50 hover:even:bg-green-800/50";

const Theme_IV_ii = () => {
  return (
    <section className="relative z-3">
      <h3>常見拍攝模式一覽</h3>
      <table className=" bg-gradient-to-br from-white/10 via-white/20 to-black/20 mt-4">
        <thead>
          <tr className="border-b bg-white/50">
            <th>模式名稱</th>
            <th>縮寫</th>
            <th>操作方式</th>
            <th>適合情境</th>
          </tr>
        </thead>
        <tbody>
          <tr className={tr_style}>
            <td>全手動模式</td>
            <td>M</td>
            <td>光圈 + 快門皆手動設定</td>
            <td>教學練習、進階創作</td>
          </tr>
          <tr className={tr_style}>
            <td>光圈先決模式</td>
            <td>A / Av</td>
            <td>手動設定光圈，快門自動調整</td>
            <td>人像、背景虛化</td>
          </tr>
          <tr className={tr_style}>
            <td>快門先決模式</td>
            <td>S / Tv</td>
            <td>手動設定快門，光圈自動調整</td>
            <td>運動、動態拍攝</td>
          </tr>
          <tr className={tr_style}>
            <td>程式自動模式</td>
            <td>P</td>
            <td>相機自動選擇快門與光圈（可微調）</td>
            <td>快速捕捉、街拍</td>
          </tr>
          <tr className={tr_style}>
            <td>全自動模式</td>
            <td>Auto</td>
            <td>所有參數全由相機決定</td>
            <td>新手初學、旅行快拍</td>
          </tr>
          <tr className={tr_style}>
            <td>場景模式 </td>
            <td>SCN</td>
            <td>
              預設參數組合供特定情境使用 <br />
              （如夜景、人像）
            </td>
            <td>入門者快速套用</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Theme_IV_ii;
