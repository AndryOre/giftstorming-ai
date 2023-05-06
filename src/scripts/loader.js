function showLoader() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.className =
    "flex flex-col gap-4 h-full items-center justify-center px-4 py-4 lg:px-8";
  main.innerHTML = `<h1 class="text-2xl font-bold">Giftstorming in Progress✨</h1><lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_uknnyrjt.json"  background="transparent"  speed="1"  style="width: 96px; height: 96px;"  loop  autoplay></lottie-player>`;
}

export { showLoader };
