const API_SERVER = 'http://localhost:3301';
const API_SONG = API_SERVER + '/songs';

const renderListMusic = () => {
  fetch(API_SONG)
    .then((response) => response.json())
    .then(async (res) => {
      const htmls = await res.map((song) => `
        <div class="card" id="card-box" style="width: 18rem;">
          <a href="${song.url}">
            <img class="card-img-top" src="${song.avatar}" alt="">
          </a>
          <div class="card-body">
            <p class="card-title">Music: ${song.title}</p>
            <p class="card">Singer: ${song.singer.fullName}</p>
          </div>
        </div>
      `);

      const container = document.querySelector('.container');
      container.innerHTML = htmls.join('');

      // Lấy danh sách tất cả các card
      const cards = container.querySelectorAll('.card');

      // Gắn sự kiện click cho mỗi card
      cards.forEach((card, index) => {
        card.addEventListener('click', () => {
          // Mở modal khi click vào card và truyền dữ liệu bài hát
          openModal(res[index]);
        });
      });

      // Gắn sự kiện click cho button "ADD" trong modal
      const addButton = document.querySelector('.addButton');
      addButton.addEventListener('click', () => {
        // Thực hiện thêm vào playlist khi click vào button "ADD"
        addToPlaylist();
      });
    })
    .catch((err) => console.log(err));
};

const myModal = document.getElementById('myModal');
const openModal = () => {
  myModal.style.display = 'block'
}

renderListMusic();