// 全ページ共通のログインチェック

(async () => {
  const token = localStorage.getItem("token");

  // トークンが無い → ログインページへ
  if (!token) {
    if (!location.pathname.includes("/auth/")) {
      location.href = "/auth/login.html";
    }
    return;
  }

  // トークンがある → 自動ログインAPIで確認
  const res = await fetch("http://localhost:3000/auto-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  });

  const data = await res.json();

  // 認証失敗 → ログインページへ
  if (!data.ok) {
    localStorage.removeItem("token");
    localStorage.removeItem("nickname");
    if (!location.pathname.includes("/auth/")) {
      location.href = "/auth/login.html";
    }
    return;
  }

  // 認証成功 → ニックネームを保持
  localStorage.setItem("nickname", data.nickname);
})();
