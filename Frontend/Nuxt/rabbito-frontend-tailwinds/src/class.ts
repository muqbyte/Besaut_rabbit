// /src/class.ts
export class Sensor {
    id: string;
    description: string;
    data: number;
    unit: string;
    max: number;
    isHigh: boolean;
    classIn: string;
    current: any[];
  
    constructor(id: string, description: string, data: number, unit: string, max: number, isHigh: boolean, classIn: string) {
      this.id = id;
      this.description = description;
      this.data = data;
      this.unit = unit;
      this.max = max;
      this.isHigh = isHigh;
      this.classIn = classIn;
      this.current = [];
    }
  
    toJSON() {
      return {
        id: this.id,
        description: this.description,
        data: this.data,
        unit: this.unit,
        max: this.max,
        isHigh: this.isHigh,
        class: this.classIn,
      };
    }
  }
  
  export class Status {
    name: string;
    remarks: string;
  
    constructor(name: string, remarks: string) {
      this.name = name;
      this.remarks = remarks;
    }
  
    toJSON() {
      return {
        name: this.name,
        remarks: this.remarks,
      };
    }
  }
  