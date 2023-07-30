//!Custom type object

type TemanType = {
    nama: string;
    isKampret: boolean;
    hutang?: number; //tanda ? membuat tipe data itu optional
};

let temanKita: TemanType; //temankita bertipe data TemanType

temanKita = {
    nama: 'orang',
    isKampret: true
}

console.log({ temanKita });