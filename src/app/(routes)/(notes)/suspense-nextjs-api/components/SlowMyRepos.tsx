export async function SlowMyRepos() {
  await new Promise((resolve) => setTimeout(resolve, 650));

  const response = await fetch("https://api.github.com/users/ocsoares/repos", {
    next: { revalidate: 86400 },
  });

  const myReposSlow = await response.json();

  return (
    <div>
      <h2>My repos SLOW !</h2>
      <pre>{JSON.stringify(myReposSlow, null, 2)}</pre>
    </div>
  );
}
