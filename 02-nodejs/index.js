// Objetivos
/*
0 - Obter usuário
1 - Obter o número de telefone do usuário a partir do seu id
2 - Obter o endereço do usuário a partir do seu id
*/ 

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Ricardo',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '9 1234-5678',
            ddd: 31
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            rua: 'Cel Newton Cesar Araújo',
            numero: '58A',
            bairro: 'Vila Nova',
            cidade: 'São Lourenço',
            uf: 'Minas Gerais',
            pais: 'Brasil'
        })
    }, 2000)
}

function resolverUsuario(err, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(err, usuario) {
    if(err){
        console.error('Usuario deu ruim', err)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(err1, telefone) {
        if(err1){
            console.error('Telefone deu ruim', err)
            return
        }

         obterEndereco(usuario.id, function resolverEndereco(err2, endereco){
            if(err2){
                console.error('Endereco deu ruim', err1)
            }

            console.log(`
                Nome: ${usuario.nome},
                Data de Nascimento: ${usuario.dataNascimento},
                Telefone: (${telefone.ddd}) ${telefone.telefone},
                Endereço: ${endereco.rua}, ${endereco.numero}
            `)
        })
    })

   
})
// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone)