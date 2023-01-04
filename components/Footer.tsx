import React from "react";
import Text from "./Text";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <div className="w-full py-5 flex flex-col justify-between items-center gap-y-5">
        <div className="w-full flex justify-evenly items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm">全般</div>
            <Text text="ホーム" link=""></Text>
            <Text text="更新履歴" link=""></Text>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm">Legal and Status</div>
            <Text text="利用規約" link=""></Text>
            <Text text="プライバシー" link=""></Text>
            <Text text="著作権（DMCA）" link=""></Text>
            <Text text="サーバー状態" link=""></Text>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="text-white text-sm">🄫2023 Copyright: Polaris.com</div>
        </div>
      </div>
    </div>
  );
}
