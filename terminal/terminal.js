window.terminal = new WinBox({
    index: 1,
    title: "Parrot Terminal",
    maxHeight: 400,
    maxWudth: 600,
    top: "5%",
    right: 5,
    bottom: "10%",
    left: 5,
    background: "#252b4e",
    html: `<div id="terminal"></div>`,
    onclose: function(force) {
        this.minimize(!this.min);
        return true;
    },
});

window.term = new Terminal({
    rows: 44,
    cols: 150,
    cursorBlink: "block",
    theme: {
        background: '#333',
        foreground: 'Cyan'
    }
});

window.curr_line = "";
window.entries = [];
window.directory = "~";
window.user_meta = `┌─[✗]─[envoh@parrot]─[${window.directory}]\r\n└──╼ $ `

window.term.open(document.getElementById('terminal'));

window.term.write(" ~ Icons By icons8.com ~ \r\n");
window.term.write(" ~ Type help for a list of available commands ~ \r\n");


window.term.write(`${window.user_meta}`);
window.term.onKey(function(data) {

    let key = data.domEvent.key;

    switch (data.domEvent.key) {
        case 'Backspace':
            if (window.curr_line) {
                window.curr_line = window.curr_line.slice(0, window.curr_line.length - 1)
                window.term.write("\b \b")
            }
            break;
        case 'Enter':
            if (window.curr_line) {
                window.entries.push(window.curr_line)

                if (window.curr_line in commands) {
                    let command = commands[window.curr_line]

                    if ('response' in command) {
                        
                        window.term.write("\r\n          " + command.response)
                        window.term.write("\r\n")
                        term.write(`${user_meta}`)
                        curr_line = ""
                    }

                    if ('function' in command) {
                        command.function()
                    }

                } else {
                    window.term.write("\r\n           unrecognised command " + window.curr_line)
                    window.term.write(`\r\n${user_meta}`)
                    window.curr_line = ""
                }
            }
        break;
        default: 
            window.curr_line += key;
            window.term.write(key)
        break;
    }

});