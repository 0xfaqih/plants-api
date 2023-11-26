# Information on the API endpoints

## Base URL
The base URL for all endpoints is: https://api.abdulfaqih.eu.org/

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
            "common_name": "Nama Umum Tanaman",
            "scientific_name": [
                "Nama Ilmiah Tanaman"
            ],
            "cycle": "Perennial",
            "propagation": [
                "Cutting",
                "Grafting Propagation",
                "Layering Propagation",
                "Seed Propagation",
                "Air Layering Propagation",
                "Tissue Culture"
            ...
        }
    }
}
```

### Get All Plants
| Endpoint      | Method        | Content Type    |
| ------------- |:-------------:|:-------------:  |
|   /plants     | GET           | application/json|

Response: 
```
{
    "status": "success",
    "message": "Berhasil mendapatkan semua tanaman",
    "data": {
        "plants": [
            {
                "id": "656286fb6327d9b964c025eb",
                "common_name": "NamaUmumTanaman",
                "scientific_name": [
                    "Nama Ilmiah Tanaman"
                ],
                "image": {
                    "regular_url": "URL Regular",
                    "medium_url": "URL Medium",
                    "small_url": "URL Small"
                }
            },
            {
                "id": "65631bbf998486cfc27fc167",
                "common_name": "Nama Umum Tanaman",
                "scientific_name": [
                    "Nama Ilmiah Tanaman"
                ],
                "image": {
                    "regular_url": "URL Regular",
                    "medium_url": "URL Medium",
                    "small_url": "URL Small"
                }
            }
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
                "regular_url": "URL Regular",
                "medium_url": "URL Medium",
                "small_url": "URL Small"
            },
            "_id": "656286fb6327d9b964c025eb",
            "common_name": "NamaUmumTanaman",
            "scientific_name": [
                "Nama Ilmiah Tanaman"
            ],
            ...
        }
    }
}
```
