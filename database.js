// --- NBV SYSTEM DATABASE (V11.0 - Final UI) ---

window.NBV_DB = {
    // Configurações Visuais e Copywriting (Textos dos Modais)
    apresentacao: {
        fotolivro: {
            titulo: "Memórias que duram para sempre",
            texto: "Não deixe suas fotos perderem-se no celular. Nossos fotolivros possuem capa dura, papel fotográfico de alta gramatura e abertura panorâmica (180°). Uma joia para a família.",
            img: "https://via.placeholder.com/600x400?text=Exemplo+Fotolivro"
        },
        revelacao: {
            titulo: "Sinta a fotografia em suas mãos",
            texto: "Revelação em papel Fujifilm profissional. Cores vivas que duram mais de 100 anos. Ideal para porta-retratos e álbuns coláveis.",
            img: "https://via.placeholder.com/600x400?text=Exemplo+Revelacao"
        },
        digital: {
            titulo: "Arquivo Digital (Alta Resolução)",
            texto: "Receba as fotos via link de download. Atenção: Arquivos digitais podem se perder com o tempo. Recomendamos fortemente a versão impressa.",
            img: "https://via.placeholder.com/600x400?text=Exemplo+Digital"
        }
    },

    assets: {
        watermarkText: "NBV - PROVA", 
        opacity: 0.15
    },

    fluxo: {
        pedirEdicao: true,       
        pedirAprovacao: true,    
        minimoFotosLivro: 20
    },

    logistica: {
        taxaEnvio: 30.00,
        cidadesGratis: ["Boa Ventura de São Roque", "Turvo", "Pitanga"],
        enderecoSede: "Rod. PR 466 km 210, Bairro Coamo (Anexo Mercado JL)"
    },

    financeiro: {
        descontoPix: 5,
        parcelasSemJuros: 4, // Para exibição "12x" no card, o sistema calcula juros se passar daqui
        tabelaJuros: [0, 4.59, 5.99, 7.49, 8.99, 10.49, 11.99, 13.49, 14.99, 16.49, 17.99, 21.00],
        whatsapp: "5542998370150",
        markup: 2.5, 
        custoFixoDiagramacao: 30.00
    },

    produtosAvulsos: [
        { nome: "Foto 10x15", preco: 10.00, icone: "fas fa-image" },
        { nome: "Foto 15x20", preco: 20.00, icone: "fas fa-image" },
        { nome: "Foto 20x30", preco: 30.00, icone: "fas fa-image" },
        { nome: "Foto 30x40", preco: 40.00, icone: "fas fa-image" },
        { nome: "Arquivo Digital", preco: 8.00, icone: "fas fa-cloud-download-alt" }
    ],

    tabelaFotolivros: [
        { size: '15x20', pages: 20, price: 214, priceBox: 356 },
        { size: '20x30', pages: 20, price: 317, priceBox: 443 },
        { size: '30x40', pages: 20, price: 592, priceBox: 754 }
        // Adicione mais linhas conforme sua tabela original...
    ],

    regrasDiagramacao: { '15x20': 3, '20x30': 4, '30x40': 5 }
};
