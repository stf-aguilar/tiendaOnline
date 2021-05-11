const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
    "672354559501-mg7k0o8m6e5pqobesm0voak7nj8p24af.apps.googleusercontent.com",
    "ktgI_j9Vd87vtsOcbYAyc9T9",
    "urn:ietf:wg:oauth:2.0:oob"
);

oAuth2Client.setCredentials({
    access_token: "ya29.a0AfH6SMD36GDUistO9BhuyALWtTMM8t51B4msIQs5Gd1Q9SsGGHMQL1Uf4-TYTjwc-DqYO0UVEmyCSt2OReSzfhyHGV39L6dC6XjYJzWuVllYEQVKmVy_ZLFo_cmOnymwKHHQ0p1HsP-w-oURBICL7jymUwMA",
    refresh_token: "1//0hbkl0acNa_uyCgYIARAAGBESNwF-L9IrRR6TkH_cBKpMvRgJXAsANiyjoJuBqY2s0g4gBDTKyZ8jdDdWaeFkiKQ_yzwEF8TdDKs",
    scope: "https://www.googleapis.com/auth/spreadsheets",
    token_type: "Bearer",
    expiry_date: 1615685878608
});

const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

async function read() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1PV01EWUJQEIHRm5iIjcnTSTWejVy_Hugc-Snt2qZzxw',
    range: 'Products!A2:E',
  });

  const rows = response.data.values;
  const products =  rows.map((row) => ({
      id:+row[0],
      name:row[1],
      price:+row[2],
      image:row[3],
      stock:+row[4],
  }));

  console.log(products);
  return(products);
}

async function write(products){
  let values = products.map(p=>[p.id,p.name, p.price, p.image,p.stock])

  const resource = {
    values,
  };

  const result = await sheets.spreadsheets.values.update({
    spreadsheetId:'1PV01EWUJQEIHRm5iIjcnTSTWejVy_Hugc-Snt2qZzxw',
    range:'Products!A2:E',
    valueInputOption:'RAW',
    resource,
  });

  console.log(result)
    
}

// async function readAndWrite(){
//   const products = await read();
//   products[0].stock = 50;
//   await write(products);
// }

// readAndWrite();

module.exports = {
  read, 
  write,
}