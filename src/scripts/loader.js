function showLoader() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.className =
    "flex grow flex-col items-center justify-center gap-4 px-4 py-4 text-center lg:px-8";
  main.innerHTML = `<h1 class="text-2xl font-bold">Giftstorming in Progress✨</h1><lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_uknnyrjt.json"  background="transparent"  speed="1"  style="width: 96px; height: 96px;"  loop  autoplay></lottie-player>`;
}

export default showLoader;
