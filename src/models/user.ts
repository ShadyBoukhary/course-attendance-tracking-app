/**
 *
 * Represents a user who is a professor.
 * @export
 * @class User
 */
export class User {

    private id: string;
    private email: string;
    private firstName: string;
    private lastName: string;
    private office: string;
    private phone: string;
    private title: string;
    private department: string;

    constructor(jsonData) {
        this.id = jsonData._id;
        this.email = jsonData.email;
        this.firstName = jsonData.firstName;
        this.lastName = jsonData.lastName;
        this.office = jsonData.office;
        this.phone = jsonData.phone;
        this.title = jsonData.title;
        this.department = jsonData.department;
    }


    // SETTERS

    /**
     * @param {string} office
     * @memberof User
     */
    setOffice(office: string) {
        this.office = office;
    }

    /**
     * @param {string} phone
     * @memberof User
     */
    setPhone(phone: string) {
        this.phone = phone;
    }


    /**
     * @param {string} title
     * @memberof User
     */
    setTitle(title: string) {
        this.title = title;
    }


    /**
     * @param {string} department
     * @memberof User
     */
    setDepartment(department: string) {
        this.department = department;
    }

    // GETTERS

    
    /**
     * @returns {string}
     * @memberof User
     */
    getId(): string {
        return this.id;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getEmail(): string {
        return this.email;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getFirstName(): string {
        return this.firstName;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getLastName(): string {
        return this.lastName;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getoffice(): string {
        return this.office;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getPhone(): string {
        return this.phone;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    gettitle(): string {
        return this.title;
    }

    /**
     * @returns {string}
     * @memberof User
     */
    getDepartment(): string {
        return this.department;
    }


}