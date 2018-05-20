export class UserModel {
 id: string;
 name: string;
 username: string;
 email: string;
 address: AddressModel;
 phone: number;
 website: string;
 company: CompanyModel;
}

export class AddressModel {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoModel;

}

export class GeoModel{
    lat: number;
    lng: number;
}

export class CompanyModel{
    name: string;
    catchPhrase: string;
    bs:  string;
}