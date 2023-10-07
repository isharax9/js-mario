// this might be backend specific part
const {Client, Account,Database,ID,Query } = Appwrite
const projectId = '6501c229d6ae06288249'
const databaseId = ''
const collectionId = ''

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId)

const account = new Account(client)

function register(event) {
    account.create(
        ID.unique()
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value,
        
    )
    }