// Modulos
const fs = rerquire('fs');
const {join} = require('path');
const filePath = join(__dirname,'cadastro.json');
// funcao busca  o usarios
const getUcad = ()=>{
	const data = ()=>{
		? fs.readdirSync(filePath) // verifica se existe o json cadastro le o path json
		: [] // caso nao exista  retorna  obj vasil
		try{
			return JSON.parse(data); //retorna e pasear o  users caso nao ocorra erro 
		}catch(error){
			return []; // retorna  vazil
		}

	}
}
// salva usuarios cadastra atualiza e deleta usuarios
const saveUser = (users) => fs.writeFilesync(filePath, JSON.stringify(users,null,'\t'));
// funcao cadRoute  cadastra  atualiza deleta
const cadRoute = (app) => {
	app.route('/users/:id?') // passa aid do usuario para atualizar
		.get((req,res)=>{
			const users = getCad();
			res.send({users}); // envia a requisiçao do usuario
		})
		.post((req,res)=>{
			const users = getCad();
			/* Imprementacoes validacoes*/
			users.push(req.body); //  cadastra  usuario no no users.json
			saveUser(users); // salva usuario
			res.status(201).send('OK');//envia mensagem Ok depois de  cadastradado com sucesso
		})
		.put((req,res)=>{
			const users = getUcad();
			saveUser(user.map(user =>{
				if(user.id === req.params.id){ // verifica se o id  e iqual se  for iqual atualiza usuario
					return{
						...user,
						...req.body
					}
				}
				return user; // caso nao entree condicao retorna usuario			
			}))
			res.status(200).send('OK');
		})
		.delete((req,res)=>{
			const users = getCad();
			saveUser(users.filter(user => user.id !== req.params.id));// salva  usarios  cujo id seja diferente do id  passado pelo params
			res.status(200).send('OK');
		})
}
module.exports = cadRoute;
