declare module "react-hexgrid-with-context-api" {
  export declare class Hex {
    q: number;
    r: number;
    s: number;
  }

  const formats = ['hexagon', 'rectangle'] as const;
  export type BoardFormats = typeof formats[number];

  type generatorFunction = {
    (center: number, mapRadius: number): Hex[];
    (q1: number, q2: number, r1: number, r2: number): Hex[];
    (mapSizeOrRadius: number): Hex[];
    (mapWidth: number, mapHeight: number): Hex[];
    (...mapProps: number[]): Hex[]
  }

  export declare class GridGenerator {
    static getGenerator(format: BoardFormats): generatorFunction
    static ring()
    static spiral()
    static paralelogram()
    static triangle()
    static hexagon()
    static rectangle()
    static orientedRectangle()
  }

  export declare const Layout: Component
  export declare const Hexagon: Component
  export declare const HexGrid: Component
};

