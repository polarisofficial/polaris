import React from "react";
import LinkText from "./LinkText";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <div className="w-full py-5 flex flex-col justify-between items-center gap-y-5">
        <div className="w-full flex justify-evenly items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm">全般</div>
            <LinkText text="ホーム" link=""></LinkText>
            <LinkText text="更新履歴" link=""></LinkText>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm">Legal and Status</div>
            <LinkText text="利用規約" link=""></LinkText>
            <LinkText text="プライバシー" link=""></LinkText>
            <LinkText text="著作権（DMCA）" link=""></LinkText>
            <LinkText text="サーバー状態" link=""></LinkText>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="text-white text-sm">🄫2023 Copyright: Polaris.com</div>
        </div>
      </div>
    </div>
  );
}
