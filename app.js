const base_url = "https://api.github.com/users/";

const input = document.querySelector(".search");
const button = document.querySelector(".button");
const userContainer = document.querySelector(".user-container");

console.log(button);
button.addEventListener("click", () => {
  getUser(input.value);
});

/* FETCH.THEN structure */
/* function getUser(user) {
  const url = base_url + user;
  console.log(url);
  try {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.log(error);
  }
} */

/* ASYNC structure */
async function getUser(username) {
  const url = base_url + username;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const {
      avatar_url,
      followers,
      followers_url,
      following,
      following_url,
      html_url,
      id,
      login,
      user,
      public_repos,
    } = data;
    userContainer.innerHTML = `
        <div class="card" style="width: 24rem">
            <img
              src="${avatar_url}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title text-center">${login}</h3>
              <div class="row my-4">
                <div class="col-4">
                  <h5 class="text-bg-danger rounded-4 py-2 text-center">Repos</h5>
                  <p class="text-center fw-bolder fs-4">${public_repos}</p>
                </div>
                <div class="col-4">
                  <h5 class="text-bg-dark rounded-4 py-2 text-center">Followers</h5>
                  <p class="text-center fw-bolder fs-4">${followers}</p>
                </div>
                <div class="col-4">
                  <h5 class="text-bg-primary rounded-4 py-2 text-center">
                    Following
                  </h5>
                  <p class="text-center fw-bolder fs-4">${following}</p>
                </div>
              </div>
              <div class="text-center">
                <a href="${html_url}" class="btn btn-primary">Github Profile Link</a>
              </div>
            </div>
          </div>`;
    getFollowing(followers_url);
  } catch (error) {
    userContainer.innerHTML = `<h1 class="text-danger">${data.message}<h1>`;
  }
}

async function getFollowing(followers_url) {
  try {
    const res = await fetch(followers_url);
    const user = await res.json();
    console.log(user);

    user.forEach((user) => {
      console.log(user);

      /* += */
    });
  } catch (error) {
    console.log("ERROR");
  }
}
