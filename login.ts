import * as pixNode from 'pixnode';
import * as fs from 'fs';

pixNode.authenticate.login((res, err) => {
    if (err) throw err;
    fs.writeFileSync("./auth/loginCredentials.json", JSON.stringify(res));
})