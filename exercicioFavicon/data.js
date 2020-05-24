module.exports = {
    headers: [
        {
            name: "Home",
            target: "_self",
            url: "/index"
        },
        {
            name: "Conteúdo",
            target: "_self",
            url: "/conteudo"
        },
        {
            name: "Comunidade",
            target: "_blank",
            url: "https://discordapp.com/invite/gCRAFhc"
        },
        {
            name: "E-mail",
            target: "_blank",
            url: "oi@rocketseat.com.br"
        },
        {
            name: "Telefone",
            target: "_blank",
            url: "+5547992078767"
        },
        {
            name: "Sobre",
            target: "_blank",
            url: "https://rocketseat.com.br/"
        }
    ],
    cards: [
        {
            idCard: "starter",
            id: "starteR",
            src: "starter",
            spanInit: "Torne-se um programador desejado",
            spanEnd: " no mercado com esses cursos desejados",
            modolos: "5 Módolos",
            numberModule: "01",
            price: "Curso Grátis"
        },
        {
            idCard: "launchbase",
            id: "launchBase",
            src: "LaunchBase",
            spanInit: "Domine programação do zero",
            spanEnd: " e tenha acesso as melhores oportunidades do mercado",
            modolos: "6 Módolos",
            numberModule: "02",
            price: "Curso Pago"
        },
        {
            idCard: "gostack",
            id: "goStack",
            src: "GoStack",
            spanInit: "Treinamento imersivo",
            spanEnd: " nas tecnologias mais modernas de desenvolvimento web e mobile",
            modolos: "8 Módolos",
            numberModule: "03",
            price: "Curso Pago"
        }
    ],
    footers: [
        {name: "GitHub", url: "https://github.com/Rocketseat"},
        {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
        {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
    ],
    starter: [
        {name: "INÍCIO", target: "_self", url: "../index"},
        {name: "STARTER", target: "_self", url: "../course/starter"},
        {name: "BOOTCAMP", target: "_self", url: "../course/gostack"},
        {name: "COMUNIDADE", target: "_blank", url: "https://discordapp.com/invite/gCRAFhc"},
        {name: "BLOG", target: "_blank", url: "https://blog.rocketseat.com.br/" }
    ],
    images:[
        {name: "facebook"},
        {name: "instagram"},
        {name: "twitter"},
        {name: "youtube"},
    ],
    courseStarter1: [
        {course: "JavaSript", title: "Domine a linguagem de programação", teacher: "Diego Fernandes", button: "Acessar", image: "curso-javascript"},
        {course: "Javascript ES6+", title: "Acompanhe o avanço da linguagem", teacher: "Diego Fernandes", button: "Acessar", image: "curso-javascript-es6"}
    ],
    courseStarter2: [
        {
            course: "NodeJS",
            title: "1. Construa a base da sua aplicação no back-end",
            description: "Para controlar a lógica e os dados das aplicações web e mobile",
            teacher: "Diego Fernandes",
            button: "Acessar",
            image: "curso-nodejs"
        },
        {
            course: "ReactJS",
            title: "2. Desenvolva a versão web da sua aplicação",
            description: "Para construir interfaces responsivas e dinâmicas no front-end",
            teacher: "Diego Fernandes",
            button: "Acessar",
            image: "curso-reactjs"
        },
        {
            course: "React Native",
            title: "3. Crie as versões mobile da sua aplicação",
            description: "Para desenvolver apps para iOS e Android com interface nativa",
            teacher: "Diego Fernandes",
            button: "Acessar",
            image: "curso-react-native"
        }
    ]
}