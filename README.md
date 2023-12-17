# Information on the API endpoints

## Base URL
The base URL for all endpoints is: https://api-article.abdulfaqih.eu.org


- [Add an Article](#Add-a-article)
- [Get All Articles](#Get-All-Articles)
- [Get Article by ID](#Get-Article-by-ID)
- [Edit Article](#Edit-Article)
- [Delete an Article](#Delete-A-Article)

---

## Add a Article
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|   /article      | POST          | application/json|

Body: 
```
 {
    "author": "jastiadirizal",
    "content": "konten artikel",
    "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
    "tag": "urban farming",
    "date": "2023-12-17",
    "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg"
}
```
> All parameters are **required** and have **String** data type

Response: 
```
{
    "status": "success",
    "message": "Artikel berhasil ditambahkan",
    "data": {
        "article": {
            "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
            "content": "konten artikel",
            "date": "2023-12-17T00:00:00.000Z",
            "author": "jastiadirizal",
            "tag": "urban farming",
            "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg",
            "_id": "657e6626eede2f8d0be6fb48",
            "__v": 0
        }
    }
}
```
___
## Get All Articles
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|   /articles     | GET           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Berhasil mendapatkan semua artikel",
    "data": {
        "article": [
            {
                "id": "657730d2983c92631d508d17",
                "content": "Urban farming atau pertanian perkotaan telah menjadi fenomena yang semakin populer di tengah perkembangan perkotaan modern. Berkebun di lingkungan perkotaan menawarkan sejumlah keunggulan yang berbeda dibandingkan dengan berkebun secara tradisional di pedesaan. Berikut adalah enam keunggulan utama urban farming:<br><br>\n\n<b>Optimasi Ruang:</b><br>\nUrban farming memungkinkan pemanfaatan ruang yang terbatas di lingkungan perkotaan. Melalui teknik bertanam vertikal, hidroponik, atau bahkan menggunakan pot dan wadah terkonsentrasi, individu dapat menanam tanaman di atap, balkon, atau bahkan dinding gedung. Ini mengoptimalkan pemanfaatan ruang yang biasanya tidak dimanfaatkan untuk berkebun dalam skala tradisional.<br><br>\n\n<b>Aksesibilitas dan Keamanan Pangan Lokal:</b><br>\nUrban farming memperpendek jarak antara produksi dan konsumsi, meningkatkan aksesibilitas serta keamanan pangan lokal dengan mengurangi ketergantungan pada pasokan dari luar kota.<br><br>\n\n<b>Efisiensi Penggunaan Air:</b><br>\nTeknologi irigasi yang efisien dan metode hidroponik pada urban farming dapat menghemat air, menjadi solusi penting dalam menghadapi masalah kekeringan perkotaan.<br><br>\n\n<b>Peningkatan Kualitas Udara dan Pengurangan Jejak Karbon:</b><br>\nTanaman yang ditanam dalam urban farming membantu meningkatkan kualitas udara di lingkungan perkotaan dengan menyerap polusi dan karbon dioksida. Tanaman tersebut berperan sebagai filter alami yang membantu membersihkan udara, menciptakan lingkungan yang lebih sehat bagi penduduk perkotaan. Dengan mendekatkan sumber produksi dan konsumsi, urban farming membantu mengurangi kebutuhan transportasi dan distribusi, mengurangi emisi gas rumah kaca dan dampak lingkungan.<br><br>\n\n<b>Pendidikan dan Kesadaran Masyarakat:</b><br>\nPertanian perkotaan berperan sebagai sarana edukasi bagi masyarakat tentang aspek-aspek pertanian berkelanjutan, membantu meningkatkan kesadaran tentang sumber makanan dan pola makan yang sehat, serta memahami pentingnya lingkungan hijau di kota.<br><br>\n\n<b>Diversifikasi Tanaman dan Peluang Pekerjaan Lokal:</b><br>\nUrban farming memungkinkan diversifikasi tanaman, menciptakan keanekaragaman pangan. Selain itu, kegiatan ini dapat menciptakan peluang pekerjaan lokal, meningkatkan ekonomi komunitas.<br><br>\n\nDengan keunggulan-keunggulan ini membuat urban farming menjadi alternatif yang menarik, urban farming tidak hanya menjadi solusi untuk memenuhi kebutuhan pangan lokal, tetapi juga menjadi alat yang efektif dalam menciptakan lingkungan perkotaan yang lebih hijau, sehat, dan berkelanjutan.",
                "title": "6 Keunggulan Urban Farming Dibandingkan Berkebun Tradisional",
                "tag": "Urban Farming",
                "date": "2023-12-06T00:00:00.000Z",
                "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg"
            },
           ...
        ]
    }
}
```
___
## Get Article by ID
| Endpoint        | Method        | Content Type    |
| -------------   |:-------------:|:-------------:  |
| /article/{articleId}| GET           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Berhasil mendapatkan detail artikel",
    "data": {
        "article": {
            "_id": "657e6626eede2f8d0be6fb48",
            "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
            "content": "konten artikel",
            "date": "2023-12-17T00:00:00.000Z",
            "author": "jastiadirizal",
            "tag": "urban farming",
            "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg",
            "__v": 0
        }
    }
}
```
___
## Edit Article
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|/article{articleId}| PUT           | application/json|


Body: 
```
{
    "author": "jastiadirizal",
    "content": "konten artikel ubah",
    "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
    "tag": "urban farming",
    "date": "2023-12-17",
    "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg"
}
```
Response: 
```
{
    "status": "success",
    "message": "Artikel berhasil diperbarui",
    "data": {
        "article": {
            "_id": "657e6626eede2f8d0be6fb48",
            "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
            "content": "konten artikel ubah",
            "date": "2023-12-17T00:00:00.000Z",
            "author": "jastiadirizal",
            "tag": "urban farming",
            "image": "https://images.pexels.com/photos/2234006/pexels-photo-2234006.jpeg",
            "__v": 0
        }
    }
}
```
## Delete A Article
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|/article{articleId}| DELETE        | application/json|

Response:
```
{
    "status": "success",
    "message": "Artikel berhasil dihapus",
    "data": {
        "article": {
            "_id": "657e6626eede2f8d0be6fb48",
            "title": "Berkenalan Dengan Tren Urban Farming yang Mudah Dilakukan Siapa Saja",
            "content": "konten artikel",
            "date": "2023-12-17T00:00:00.000Z",
            "author": "jastiadirizal",
            "tag": "urban farming",
            "image": "https://images.unsplash.com/photo-1595755969397-5b2e8846dbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "__v": 0
        }
    }
}

```
