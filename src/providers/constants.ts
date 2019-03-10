export class APIConstants {
    static readonly baseUrl = 'http://45.32.197.143:8081';
    static readonly usersUrl = '/';
    static readonly loginUrl = '/login';
    static readonly signUpUrl = '/users';
    static readonly userUrl = '/users';
    static readonly createCourseUrl = '/courses';
    static readonly createImageIUrl = '/images';
}

export class StorageConstants {
    static readonly USER_ID_KEY = 'userId';
    static readonly AUTHENTICATED = 'authenticated';
    static readonly JSON_WEB_TOKEN = 'x-access-token';
}

export const DEPARTMENTS = [
    'ACCT', 'AGBU', 'AMUS', 'ART', 'ATRN', 'BAAS', 'BIOL', 'BUAD', 'CHEM',
    'CMPS', 'COUN', 'CRJU', 'DHNY', 'ECED', 'ECON', 'EDBE', 'EDUC', 'ENGL',
    'ENSC', 'EPSY', 'ETEC', 'EXPH', 'FINC', 'FREN', 'GEOG', 'GEOS', 'GERM',
    'GLBS', 'GNMT', 'GNSC', 'HIST', 'HSAD', 'HSHS', 'HUMN', 'IDT', 'KNES',
    'LATS', 'LSBA', 'MATH', 'MCOM', 'MENG', 'MGMT', 'MIS', 'MKTG', 'MLSC', 
    'MUSC', 'MWSU', 'NURS', 'PETE', 'PHIL', 'PHYS', 'POLS', 'PSYC', 'RADS',
    'READ', 'RESP', 'SCIE', 'SOCL', 'SOST', 'SOWK', 'SPAN', 'SPCH', 'SPED',
    'STAT', 'UGRO', 'WGST'
];