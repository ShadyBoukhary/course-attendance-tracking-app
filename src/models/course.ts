import { Student } from './student';
export class Course {

    private id?: string;
 //   private classId: string;
    private ownerId: string;
    private department: string;
    private courseNum: string;
    private section: string;
    private term: string;
    private year: string;
    private room: string;
    private building: string;
    private startDate: number;
    private endDate: number;
    public students: Student[];

    constructor(ownerId: string, department: string, courseNum: string,
        section: string, term: string, year: string, room: string, building: string,
        startDate: number, endDate: number) {

       // this.classId = classId;
        this.ownerId = ownerId;
        this.department = department;
        this.courseNum = courseNum;
        this.section = section;
        this.term = term;
        this.year = year;
        this.room = room;
        this.building = building;
        this.startDate = startDate;
        this.endDate = endDate;
        this.students = [];
    }

    // SETTERS


    /**
     * @param {string} id
     * @memberof Course
     */
    setId(id: string) {
        this.id = id;
    }

    // /**
    //  * @param {string} classId
    //  * @memberof Course
    //  */
    // setClassId(classId: string) {
    //     this.classId = classId;
    // }

    /**
     * @param {string} ownerId
     * @memberof Course
     */
    setOwnerId(ownerId: string) {
        this.ownerId = ownerId;
    }

    /**
     * @param {string} department
     * @memberof Course
     */
    setDepartment(department: string) {
        this.department = department;
    }

    /**
     * @param {string} courseNum
     * @memberof Course
     */
    setCourseNum(courseNum: string) {
        this.courseNum = courseNum;
    }

    /**
     * @param {string} section
     * @memberof Course
     */
    setSection(section: string) {
        this.section = section;
    }

    /**
     * @param {string} term
     * @memberof Course
     */
    setTerm(term: string) {
        this.term = term;
    }

    /**
     * @param {string} year
     * @memberof Course
     */
    setYear(year: string) {
        this.year = year;
    }

    /**
     * @param {string} room
     * @memberof Course
     */
    setRoom(room: string) {
        this.room = room;
    }

    /**
     * @param {string} building
     * @memberof Course
     */
    setBuilding(building: string) {
        this.building = building;
    }

    /**
     * @param {number} startDate
     * @memberof Course
     */
    setStartDate(startDate: number) {
        this.startDate = startDate;
    }

    /**
     * @param {number} endDate
     * @memberof Course
     */
    setEndDate(endDate: number) {
        this.endDate = endDate;
    }

    // GETTERS

    /**
     * @returns
     * @memberof Course
     */
    getId() {
        return this.id;
    }

    // /**
    //  * @returns
    //  * @memberof Course
    //  */
    // getClassId() {
    //     return this.classId;
    // }

    /**
     * @returns
     * @memberof Course
     */
    getOwnerId() {
        return this.ownerId;
    }

    /**
     * @returns
     * @memberof Course
     */
    getDepartment() {
        return this.department;
    }

    /**
     * @returns
     * @memberof Course
     */
    getCourseNum() {
        return this.courseNum;
    }

    /**
     * @returns
     * @memberof Course
     */
    getSection() {
        return this.section;
    }

    /**
     * @returns
     * @memberof Course
     */
    getTerm() {
        return this.term;
    }

    /**
     * @returns
     * @memberof Course
     */
    getYear() {
        return this.year;
    }

    /**
     * @returns
     * @memberof Course
     */
    getRoom() {
        return this.room;
    }

    /**
     * @returns
     * @memberof Course
     */
    getBuilding() {
        return this.building;
    }

    /**
     * @returns
     * @memberof Course
     */
    getStartDate() {
        return this.startDate;
    }

    /**
     * @returns
     * @memberof Course
     */
    getEndDate() {
        return this.endDate;
    }

    getFormattedStartDate() {
        return new Date(this.startDate).toDateString();
    }

    getStudents() {
        return this.students;
    }

    getFormattedEndDate() {
        return new Date(this.endDate).toDateString();
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    addStudents(students: Student[]) {
        this.students.push(...students);
    }

    // toJSON() {
    //     return JSON.stringify(this);
    // }


}
