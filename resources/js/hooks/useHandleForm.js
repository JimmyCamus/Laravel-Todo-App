export const useHandlerForm = () => {
  return handlerForm;
};

const handlerForm = async (e, url) => {
  e.preventDefault();
  const form = new FormData();
  Array.from(e.currentTarget.elements).forEach((element) => {
    if (!element.name) return;
    form.append(element.name, element.value);
    element.value = "";
  });

  const response = await fetch(url, {
    method: "POST",
    body: form,
  });
  const data = await response.json();

  return data;
};
