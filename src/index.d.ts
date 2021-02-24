import { Component } from 'react';

declare module "react-hexgrid" {
  export class Hex {
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

  export class GridGenerator {
    static getGenerator(format: BoardFormats): generatorFunction
    static ring()
    static spiral()
    static paralelogram()
    static triangle()
    static hexagon()
    static rectangle()
    static orientedRectangle()
  }

  export const Layout: Component
  export const Hexagon: Component
  export const HexGrid: Component
};

