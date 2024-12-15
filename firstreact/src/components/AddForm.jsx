function Submit(e) {
  const Filled = data["title"] !== "" && data["summary"] !== "";
  if (!Filled) {
    e.preventDefault();
    setfail(true);
    setsuccess(false);
    setTimeout(() => {
      setfail(false);
    }, 10000);
  }

  if (Filled) {
    e.preventDefault();
    setfail(false);
    setsuccess(true);
    setTimeout(() => {
      setsuccess(false);
    }, 3000);

    // Use the backend URL from environment variables
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/databasestore`, data)
      .catch((error) => {
        console.error("There was an error with the API call:", error);
        // Handle error if necessary
      });

    setData({ title: "", summary: "" });
  }
}
