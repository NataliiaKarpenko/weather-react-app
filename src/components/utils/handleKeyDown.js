export const handleKeyDown = (e, setModalOpen) => {
  if (e.code === "Escape") {
    setModalOpen(false);
  }

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
};
