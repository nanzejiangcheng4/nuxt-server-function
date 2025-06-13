import type { Member } from "@/interfaces";
import { createMemberList } from "@/membersDB";

export default defineEventHandler((event): Member => {
  // クエリパラメータを取得
  const query = getQuery(event);
  // memberDB.tsを利用して会員リスト情報Mapオブジェクトを生成
  const memberList = createMemberList();
  // クエリパラメータのidを数値に変換
  const idNo = Number(query.id);
  // クエリパラメーターに該当する会員情報オブジェクトを取得
  const member = memberList.get(idNo) as Member;
  return member;
});
