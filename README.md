# Information on the API endpoints

## Base URL
The base URL for all endpoints is: https://apiplant.abdulfaqih.eu.org/

### Add a plant
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|   /plant      | POST          | application/json|

Response: 
```
{
    "status": "success",
    "message": "Tanaman berhasil ditambahkan",
    "data": {
        "plant": {
            "common_name": "Tanaman Laba-Laba",
            "scientific_name": "Chlorophytum 'Bonnie'",
            "place": [
                "indoors"
            ],
            "sunlight": [
                "redup"
            ],
            "growth": "tinggi",
            "care_level": "Sedang",
            "management": "Sedang",
            "description": "Spider Plant (Chlorophytum 'Bonnie') adalah tanaman hias yang sangat serbaguna dan perawatannya rendah. Tanaman ini tahan terhadap cahaya tidak langsung rendah hingga terang dan hampir semua jenis tanah. Pola pertumbuhannya yang tidak biasa menyerupai laba-laba atau roset dedaunan seperti tali yang menyebar dari batang tengah. Bunganya yang berwarna putih berujung merah akan muncul seiring berjalannya waktu. Ini adalah tanaman hias pemula yang sempurna karena mudah tumbuh dan berkembang biak, membutuhkan sedikit perawatan, dan dapat bertahan hidup di berbagai lingkungan. Bahkan bisa ditanam di luar ruangan di zona 11 dan 12! Secara keseluruhan, Spider Plant adalah tambahan yang menyenangkan dan tahan lama untuk taman rumah mana pun.",
            "manage_type": "Spider Plant sering digunakan sebagai tanaman hias dalam ruangan karena daun-daunnya yang panjang dan ramping, serta pola uniknya yang membuatnya menarik secara visual. Tanaman ini dapat memberikan sentuhan hijau dan kesegaran pada dekorasi dalam ruangan.",
            "image": {
                "regular_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/regular/Chlorophytum_comosum_Variegatum_1zz.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/medium/Chlorophytum_comosum_Variegatum_1zz.jpg",
                "small_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/small/Chlorophytum_comosum_Variegatum_1zz.jpg"
            },
            "_id": "65771c3c5388056244e02eb2",
            "__v": 0
        }
    }
}
```

### Get All Plants
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|   /plant     | GET           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Berhasil mendapatkan semua tanaman",
    "data": {
        "plants": [
            {
                "id": "65760ad0342b663fd5ed2356",
                "common_name": "Begonia Lilin",
                "scientific_name": "Begonia Semperflorens-Cultorum 'Harmoni Scarlet'",
                "image": {
                    "regular_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/regular/52423452233_02b4dc198b_b.jpg",
                    "medium_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/medium/52423452233_02b4dc198b_b.jpg",
                    "small_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/small/52423452233_02b4dc198b_b.jpg"
                }
            },
            ...
        ]
    }
}
```

### Get Plant by ID
| Endpoint        | Method        | Content Type    |
| -------------   |:-------------:|:-------------:  |
| /plant/{plantId}| GET           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Berhasil mendapatkan detail tanaman",
    "data": {
        "plant": {
            "image": {
                "regular_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/regular/52423452233_02b4dc198b_b.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/medium/52423452233_02b4dc198b_b.jpg",
                "small_url": "https://perenual.com/storage/species_image/1219_begonia_semperflorens-cultorum_harmony_scarlet/small/52423452233_02b4dc198b_b.jpg"
            },
            "_id": "65760ad0342b663fd5ed2356",
            "common_name": "Begonia Lilin",
            "scientific_name": "Begonia Semperflorens-Cultorum 'Harmoni Scarlet'",
            "place": [
                "Indoor"
            ],
            "sunlight": [
                "Teduh"
            ],
            "growth": "Lambat",
            "care_level": "Sedang",
            "management": "Vertikal Garden",
            ...
        }
    }
}
```
### Edit Plant
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|/plant{plantId}| PUT           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Tanaman berhasil diperbarui",
    "data": {
        "plant": {
            "image": {
                "regular_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/regular/Chlorophytum_comosum_Variegatum_1zz.jpg",
                "medium_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/medium/Chlorophytum_comosum_Variegatum_1zz.jpg",
                "small_url": "https://perenual.com/storage/species_image/1846_chlorophytum_bonnie/small/Chlorophytum_comosum_Variegatum_1zz.jpg"
            },
            "_id": "6577d17b4d66e1dcb6950edd",
            "common_name": "Bukan tanaman",
            "scientific_name": "Chlorophytum 'Bonnie'",
            "place": [
                "indoors"
            ],
            "watering": "sedang",
            "sunlight": [
                "redup"
            ],
            "growth": "tinggi",
            "care_level": "Sedang",
            "management": "Sedang",
            ...
    }
}
```
