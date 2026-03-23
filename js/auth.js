(async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    if (!location.pathname.includes("/auth/")) {
      location.href = "/guild-tool/auth/login.html";
    }
    return;
  }

  const res = await fetch("http://217.142.226.174:3000/auto-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  });

  const data = await res.json();

  if (!data.ok) {
    localStorage.removeItem("token");
    localStorage.removeItem("nickname");
    if (!location.pathname.includes("/auth/")) {
      location.href = "/guild-tool/auth/login.html";
    }
    return;
  }

  localStorage.setItem("nickname", data.nickname);
})();
