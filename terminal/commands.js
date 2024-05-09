const applications = {
    'blog': "Personal Blog Using Obsidian, SyncThing and Quartz"
}

const commands = {
    'help': {
        'hint': "Displays a list of available commands",
        'function': () => {
            window.term.write("\r\n")
            let cmds = Object.keys(commands)
            for (let cmd of cmds) {
                if ('hint' in commands[cmd]) {
                    window.term.write(`[${cmd}] ${commands[cmd].hint}\r\n`)
                }
            }
            term.write(`${user_meta}`)
            curr_line = ""
        }
    },
    'clear': {
        'hint': "Clears The Terminal",
        'function': () => {
            
            window.term.write(`\r\n┌─[✗]─[envoh@parrot]─[${window.directory}]`)
            window.curr_line = "" 
            window.term.clear()
            window.term.write(`\r\n└──╼ $ `)
         }
    },
    'whoami': {
        'response': "Oliver Mark Harris <dev@olivermharris.co.uk>"
    },
    'open': {
        'hint': "Opens an application, type open for a list of available applications",
        'function': () => {
            window.term.write("\r\n")
            let apps = Object.keys(applications)
            for (let app of apps) {
                window.term.write(`[${app}] ${applications[app]}\r\n`)
            }
            term.write(`${user_meta}`)
            curr_line = ""
        }
    },
    'open blog': {
        'response' : "",
        'function': () => {
            new WinBox({
                title: "Blog",
                maxHeight: 400,
                maxWudth: 600,
                top: "5%",
                right: 5,
                bottom: "10%",
                left: 5,
                background: "#252b4e",
                url: "https://git.olivermharris.co.uk/blog",
            });
        }
    }
}