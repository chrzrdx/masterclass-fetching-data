image_urls = [
  "http://cdn.shibe.online/shibes/c9955b644d7d183ab62573c3142a542c038ed269.jpg",
  "http://cdn.shibe.online/shibes/54826f20f8d9bf705b2df11dda24e3e65713b53a.jpg",
  "http://cdn.shibe.online/shibes/db2b3bdbfecd70977e783bd3fafe3974ae01a178.jpg",
  "http://cdn.shibe.online/shibes/4d72e2885da59858c597f84985084d1dabeee4c0.jpg",
  "http://cdn.shibe.online/shibes/7bfd36aed9fbfe08fec7ec1037d73eda7da3cf2c.jpg",
  "http://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg",
  "http://cdn.shibe.online/shibes/834e5a6a238436837866762e531d0e619288bfda.jpg",
  "http://cdn.shibe.online/shibes/8dec46bcebbebdbb53a3a78b4f777568ea82e33f.jpg",
  "http://cdn.shibe.online/shibes/e4ab73058523492a33cd1b88657d1213e5c086b6.jpg",
]

const gallery = document.querySelector(".gallery")
let galleryHTML = ""

image_urls.forEach((url) => {
  galleryHTML += `
    <li>
        <img src=${url} alt="shibu dog" />
    </li>
    `
})

gallery.innerHTML = galleryHTML

function loadMoreImages() {
  const url = "https://aws.random.cat/meow"

  for (let i = 0; i < 3; i++) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        gallery.innerHTML += `
          <li>
              <img src=${data.file} alt="new random picture" />
          </li>
          `
      })
  }
}

const button = document.querySelector('button')

button.addEventListener('click', loadMoreImages)