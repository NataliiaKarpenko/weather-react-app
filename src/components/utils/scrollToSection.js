export const scrollDown = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};
