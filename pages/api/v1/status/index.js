function status(request, response) {
  response.status(200).json({ chave: "Tudo ok, meu nobre. Só dá-lhe." });
}

export default status;
