export const register = (email, fullname) => {
    return fetch('https:// maschbot.site/cgi-bin3/devtest.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, fullname})
    }).then((response) => {
        try {
                return response.json();
        } catch (e) {
            return (e)
        }
    })
};
