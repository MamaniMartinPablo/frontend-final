const logout = () => {
    sessionStorage.removeItem("adm")
    window.location.href = './index.html'
}