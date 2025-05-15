
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model Pesanan
 * 
 */
export type Pesanan = $Result.DefaultSelection<Prisma.$PesananPayload>
/**
 * Model Pembelian
 * 
 */
export type Pembelian = $Result.DefaultSelection<Prisma.$PembelianPayload>
/**
 * Model Pembeli
 * 
 */
export type Pembeli = $Result.DefaultSelection<Prisma.$PembeliPayload>
/**
 * Model Suplier
 * 
 */
export type Suplier = $Result.DefaultSelection<Prisma.$SuplierPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Barangs
 * const barangs = await prisma.barang.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Barangs
   * const barangs = await prisma.barang.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesanan`: Exposes CRUD operations for the **Pesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesanans
    * const pesanans = await prisma.pesanan.findMany()
    * ```
    */
  get pesanan(): Prisma.PesananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembelian`: Exposes CRUD operations for the **Pembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelians
    * const pembelians = await prisma.pembelian.findMany()
    * ```
    */
  get pembelian(): Prisma.PembelianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembeli`: Exposes CRUD operations for the **Pembeli** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelis
    * const pembelis = await prisma.pembeli.findMany()
    * ```
    */
  get pembeli(): Prisma.PembeliDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suplier`: Exposes CRUD operations for the **Suplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supliers
    * const supliers = await prisma.suplier.findMany()
    * ```
    */
  get suplier(): Prisma.SuplierDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Barang: 'Barang',
    Pesanan: 'Pesanan',
    Pembelian: 'Pembelian',
    Pembeli: 'Pembeli',
    Suplier: 'Suplier'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "barang" | "pesanan" | "pembelian" | "pembeli" | "suplier"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      Pesanan: {
        payload: Prisma.$PesananPayload<ExtArgs>
        fields: Prisma.PesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          findFirst: {
            args: Prisma.PesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          findMany: {
            args: Prisma.PesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          create: {
            args: Prisma.PesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          createMany: {
            args: Prisma.PesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          delete: {
            args: Prisma.PesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          update: {
            args: Prisma.PesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          deleteMany: {
            args: Prisma.PesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          upsert: {
            args: Prisma.PesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          aggregate: {
            args: Prisma.PesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesanan>
          }
          groupBy: {
            args: Prisma.PesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesananCountArgs<ExtArgs>
            result: $Utils.Optional<PesananCountAggregateOutputType> | number
          }
        }
      }
      Pembelian: {
        payload: Prisma.$PembelianPayload<ExtArgs>
        fields: Prisma.PembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findFirst: {
            args: Prisma.PembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          findMany: {
            args: Prisma.PembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          create: {
            args: Prisma.PembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          createMany: {
            args: Prisma.PembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembelianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          delete: {
            args: Prisma.PembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          update: {
            args: Prisma.PembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          deleteMany: {
            args: Prisma.PembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembelianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>[]
          }
          upsert: {
            args: Prisma.PembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembelianPayload>
          }
          aggregate: {
            args: Prisma.PembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembelian>
          }
          groupBy: {
            args: Prisma.PembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembelianCountArgs<ExtArgs>
            result: $Utils.Optional<PembelianCountAggregateOutputType> | number
          }
        }
      }
      Pembeli: {
        payload: Prisma.$PembeliPayload<ExtArgs>
        fields: Prisma.PembeliFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembeliFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembeliFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          findFirst: {
            args: Prisma.PembeliFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembeliFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          findMany: {
            args: Prisma.PembeliFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          create: {
            args: Prisma.PembeliCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          createMany: {
            args: Prisma.PembeliCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembeliCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          delete: {
            args: Prisma.PembeliDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          update: {
            args: Prisma.PembeliUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          deleteMany: {
            args: Prisma.PembeliDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembeliUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembeliUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          upsert: {
            args: Prisma.PembeliUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          aggregate: {
            args: Prisma.PembeliAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembeli>
          }
          groupBy: {
            args: Prisma.PembeliGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembeliGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembeliCountArgs<ExtArgs>
            result: $Utils.Optional<PembeliCountAggregateOutputType> | number
          }
        }
      }
      Suplier: {
        payload: Prisma.$SuplierPayload<ExtArgs>
        fields: Prisma.SuplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          findFirst: {
            args: Prisma.SuplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          findMany: {
            args: Prisma.SuplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          create: {
            args: Prisma.SuplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          createMany: {
            args: Prisma.SuplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          delete: {
            args: Prisma.SuplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          update: {
            args: Prisma.SuplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          deleteMany: {
            args: Prisma.SuplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>[]
          }
          upsert: {
            args: Prisma.SuplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuplierPayload>
          }
          aggregate: {
            args: Prisma.SuplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuplier>
          }
          groupBy: {
            args: Prisma.SuplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuplierCountArgs<ExtArgs>
            result: $Utils.Optional<SuplierCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    barang?: BarangOmit
    pesanan?: PesananOmit
    pembelian?: PembelianOmit
    pembeli?: PembeliOmit
    suplier?: SuplierOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    Pesanan: number
    Pembelian: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pesanan?: boolean | BarangCountOutputTypeCountPesananArgs
    Pembelian?: boolean | BarangCountOutputTypeCountPembelianArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
  }


  /**
   * Count Type PembeliCountOutputType
   */

  export type PembeliCountOutputType = {
    Pesanan: number
  }

  export type PembeliCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pesanan?: boolean | PembeliCountOutputTypeCountPesananArgs
  }

  // Custom InputTypes
  /**
   * PembeliCountOutputType without action
   */
  export type PembeliCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembeliCountOutputType
     */
    select?: PembeliCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PembeliCountOutputType without action
   */
  export type PembeliCountOutputTypeCountPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
  }


  /**
   * Count Type SuplierCountOutputType
   */

  export type SuplierCountOutputType = {
    Pembelian: number
  }

  export type SuplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | SuplierCountOutputTypeCountPembelianArgs
  }

  // Custom InputTypes
  /**
   * SuplierCountOutputType without action
   */
  export type SuplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuplierCountOutputType
     */
    select?: SuplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuplierCountOutputType without action
   */
  export type SuplierCountOutputTypeCountPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    id_barang: number | null
    harga_beli: number | null
    harga_jual: number | null
  }

  export type BarangSumAggregateOutputType = {
    id_barang: number | null
    harga_beli: number | null
    harga_jual: number | null
  }

  export type BarangMinAggregateOutputType = {
    id_barang: number | null
    nama: string | null
    varian: string | null
    harga_beli: number | null
    harga_jual: number | null
  }

  export type BarangMaxAggregateOutputType = {
    id_barang: number | null
    nama: string | null
    varian: string | null
    harga_beli: number | null
    harga_jual: number | null
  }

  export type BarangCountAggregateOutputType = {
    id_barang: number
    nama: number
    varian: number
    harga_beli: number
    harga_jual: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    id_barang?: true
    harga_beli?: true
    harga_jual?: true
  }

  export type BarangSumAggregateInputType = {
    id_barang?: true
    harga_beli?: true
    harga_jual?: true
  }

  export type BarangMinAggregateInputType = {
    id_barang?: true
    nama?: true
    varian?: true
    harga_beli?: true
    harga_jual?: true
  }

  export type BarangMaxAggregateInputType = {
    id_barang?: true
    nama?: true
    varian?: true
    harga_beli?: true
    harga_jual?: true
  }

  export type BarangCountAggregateInputType = {
    id_barang?: true
    nama?: true
    varian?: true
    harga_beli?: true
    harga_jual?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id_barang: number
    nama: string
    varian: string | null
    harga_beli: number
    harga_jual: number
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama?: boolean
    varian?: boolean
    harga_beli?: boolean
    harga_jual?: boolean
    Pesanan?: boolean | Barang$PesananArgs<ExtArgs>
    Pembelian?: boolean | Barang$PembelianArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama?: boolean
    varian?: boolean
    harga_beli?: boolean
    harga_jual?: boolean
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_barang?: boolean
    nama?: boolean
    varian?: boolean
    harga_beli?: boolean
    harga_jual?: boolean
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id_barang?: boolean
    nama?: boolean
    varian?: boolean
    harga_beli?: boolean
    harga_jual?: boolean
  }

  export type BarangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_barang" | "nama" | "varian" | "harga_beli" | "harga_jual", ExtArgs["result"]["barang"]>
  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pesanan?: boolean | Barang$PesananArgs<ExtArgs>
    Pembelian?: boolean | Barang$PembelianArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BarangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      Pesanan: Prisma.$PesananPayload<ExtArgs>[]
      Pembelian: Prisma.$PembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_barang: number
      nama: string
      varian: string | null
      harga_beli: number
      harga_jual: number
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangFindUniqueArgs>(args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangFindFirstArgs>(args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.findMany({ select: { id_barang: true } })
     * 
     */
    findMany<T extends BarangFindManyArgs>(args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends BarangCreateArgs>(args: SelectSubset<T, BarangCreateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barangs.
     * @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangCreateManyArgs>(args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barangs and returns the data saved in the database.
     * @param {BarangCreateManyAndReturnArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barangs and only return the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.createManyAndReturn({
     *   select: { id_barang: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends BarangDeleteArgs>(args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangUpdateArgs>(args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangDeleteManyArgs>(args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangUpdateManyArgs>(args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs and returns the data updated in the database.
     * @param {BarangUpdateManyAndReturnArgs} args - Arguments to update many Barangs.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barangs and only return the `id_barang`
     * const barangWithId_barangOnly = await prisma.barang.updateManyAndReturn({
     *   select: { id_barang: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BarangUpdateManyAndReturnArgs>(args: SelectSubset<T, BarangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends BarangUpsertArgs>(args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pesanan<T extends Barang$PesananArgs<ExtArgs> = {}>(args?: Subset<T, Barang$PesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pembelian<T extends Barang$PembelianArgs<ExtArgs> = {}>(args?: Subset<T, Barang$PembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Barang model
   */
  interface BarangFieldRefs {
    readonly id_barang: FieldRef<"Barang", 'Int'>
    readonly nama: FieldRef<"Barang", 'String'>
    readonly varian: FieldRef<"Barang", 'String'>
    readonly harga_beli: FieldRef<"Barang", 'Float'>
    readonly harga_jual: FieldRef<"Barang", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }

  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
  }

  /**
   * Barang createManyAndReturn
   */
  export type BarangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
  }

  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
  }

  /**
   * Barang updateManyAndReturn
   */
  export type BarangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
  }

  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }

  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to delete.
     */
    limit?: number
  }

  /**
   * Barang.Pesanan
   */
  export type Barang$PesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    cursor?: PesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Barang.Pembelian
   */
  export type Barang$PembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    cursor?: PembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
  }


  /**
   * Model Pesanan
   */

  export type AggregatePesanan = {
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  export type PesananAvgAggregateOutputType = {
    id_pesanan: number | null
    id_pelanggan: number | null
    id_barang: number | null
    qty: number | null
  }

  export type PesananSumAggregateOutputType = {
    id_pesanan: number | null
    id_pelanggan: number | null
    id_barang: number | null
    qty: number | null
  }

  export type PesananMinAggregateOutputType = {
    id_pesanan: number | null
    id_pelanggan: number | null
    id_barang: number | null
    qty: number | null
    tgl_pesan: Date | null
  }

  export type PesananMaxAggregateOutputType = {
    id_pesanan: number | null
    id_pelanggan: number | null
    id_barang: number | null
    qty: number | null
    tgl_pesan: Date | null
  }

  export type PesananCountAggregateOutputType = {
    id_pesanan: number
    id_pelanggan: number
    id_barang: number
    qty: number
    tgl_pesan: number
    _all: number
  }


  export type PesananAvgAggregateInputType = {
    id_pesanan?: true
    id_pelanggan?: true
    id_barang?: true
    qty?: true
  }

  export type PesananSumAggregateInputType = {
    id_pesanan?: true
    id_pelanggan?: true
    id_barang?: true
    qty?: true
  }

  export type PesananMinAggregateInputType = {
    id_pesanan?: true
    id_pelanggan?: true
    id_barang?: true
    qty?: true
    tgl_pesan?: true
  }

  export type PesananMaxAggregateInputType = {
    id_pesanan?: true
    id_pelanggan?: true
    id_barang?: true
    qty?: true
    tgl_pesan?: true
  }

  export type PesananCountAggregateInputType = {
    id_pesanan?: true
    id_pelanggan?: true
    id_barang?: true
    qty?: true
    tgl_pesan?: true
    _all?: true
  }

  export type PesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanan to aggregate.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesanans
    **/
    _count?: true | PesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesananMaxAggregateInputType
  }

  export type GetPesananAggregateType<T extends PesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesanan[P]>
      : GetScalarType<T[P], AggregatePesanan[P]>
  }




  export type PesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithAggregationInput | PesananOrderByWithAggregationInput[]
    by: PesananScalarFieldEnum[] | PesananScalarFieldEnum
    having?: PesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesananCountAggregateInputType | true
    _avg?: PesananAvgAggregateInputType
    _sum?: PesananSumAggregateInputType
    _min?: PesananMinAggregateInputType
    _max?: PesananMaxAggregateInputType
  }

  export type PesananGroupByOutputType = {
    id_pesanan: number
    id_pelanggan: number
    id_barang: number
    qty: number
    tgl_pesan: Date
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  type GetPesananGroupByPayload<T extends PesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesananGroupByOutputType[P]>
            : GetScalarType<T[P], PesananGroupByOutputType[P]>
        }
      >
    >


  export type PesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pesanan?: boolean
    id_pelanggan?: boolean
    id_barang?: boolean
    qty?: boolean
    tgl_pesan?: boolean
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pesanan?: boolean
    id_pelanggan?: boolean
    id_barang?: boolean
    qty?: boolean
    tgl_pesan?: boolean
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pesanan?: boolean
    id_pelanggan?: boolean
    id_barang?: boolean
    qty?: boolean
    tgl_pesan?: boolean
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectScalar = {
    id_pesanan?: boolean
    id_pelanggan?: boolean
    id_barang?: boolean
    qty?: boolean
    tgl_pesan?: boolean
  }

  export type PesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pesanan" | "id_pelanggan" | "id_barang" | "qty" | "tgl_pesan", ExtArgs["result"]["pesanan"]>
  export type PesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type PesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type PesananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
  }

  export type $PesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pesanan"
    objects: {
      Pembeli: Prisma.$PembeliPayload<ExtArgs>
      Barang: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pesanan: number
      id_pelanggan: number
      id_barang: number
      qty: number
      tgl_pesan: Date
    }, ExtArgs["result"]["pesanan"]>
    composites: {}
  }

  type PesananGetPayload<S extends boolean | null | undefined | PesananDefaultArgs> = $Result.GetResult<Prisma.$PesananPayload, S>

  type PesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesananCountAggregateInputType | true
    }

  export interface PesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pesanan'], meta: { name: 'Pesanan' } }
    /**
     * Find zero or one Pesanan that matches the filter.
     * @param {PesananFindUniqueArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesananFindUniqueArgs>(args: SelectSubset<T, PesananFindUniqueArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesananFindUniqueOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesananFindUniqueOrThrowArgs>(args: SelectSubset<T, PesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesananFindFirstArgs>(args?: SelectSubset<T, PesananFindFirstArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesananFindFirstOrThrowArgs>(args?: SelectSubset<T, PesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesanans
     * const pesanans = await prisma.pesanan.findMany()
     * 
     * // Get first 10 Pesanans
     * const pesanans = await prisma.pesanan.findMany({ take: 10 })
     * 
     * // Only select the `id_pesanan`
     * const pesananWithId_pesananOnly = await prisma.pesanan.findMany({ select: { id_pesanan: true } })
     * 
     */
    findMany<T extends PesananFindManyArgs>(args?: SelectSubset<T, PesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pesanan.
     * @param {PesananCreateArgs} args - Arguments to create a Pesanan.
     * @example
     * // Create one Pesanan
     * const Pesanan = await prisma.pesanan.create({
     *   data: {
     *     // ... data to create a Pesanan
     *   }
     * })
     * 
     */
    create<T extends PesananCreateArgs>(args: SelectSubset<T, PesananCreateArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesanans.
     * @param {PesananCreateManyArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesananCreateManyArgs>(args?: SelectSubset<T, PesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesanans and returns the data saved in the database.
     * @param {PesananCreateManyAndReturnArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesanans and only return the `id_pesanan`
     * const pesananWithId_pesananOnly = await prisma.pesanan.createManyAndReturn({
     *   select: { id_pesanan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesananCreateManyAndReturnArgs>(args?: SelectSubset<T, PesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pesanan.
     * @param {PesananDeleteArgs} args - Arguments to delete one Pesanan.
     * @example
     * // Delete one Pesanan
     * const Pesanan = await prisma.pesanan.delete({
     *   where: {
     *     // ... filter to delete one Pesanan
     *   }
     * })
     * 
     */
    delete<T extends PesananDeleteArgs>(args: SelectSubset<T, PesananDeleteArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pesanan.
     * @param {PesananUpdateArgs} args - Arguments to update one Pesanan.
     * @example
     * // Update one Pesanan
     * const pesanan = await prisma.pesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesananUpdateArgs>(args: SelectSubset<T, PesananUpdateArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesanans.
     * @param {PesananDeleteManyArgs} args - Arguments to filter Pesanans to delete.
     * @example
     * // Delete a few Pesanans
     * const { count } = await prisma.pesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesananDeleteManyArgs>(args?: SelectSubset<T, PesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesananUpdateManyArgs>(args: SelectSubset<T, PesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans and returns the data updated in the database.
     * @param {PesananUpdateManyAndReturnArgs} args - Arguments to update many Pesanans.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesanans and only return the `id_pesanan`
     * const pesananWithId_pesananOnly = await prisma.pesanan.updateManyAndReturn({
     *   select: { id_pesanan: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PesananUpdateManyAndReturnArgs>(args: SelectSubset<T, PesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pesanan.
     * @param {PesananUpsertArgs} args - Arguments to update or create a Pesanan.
     * @example
     * // Update or create a Pesanan
     * const pesanan = await prisma.pesanan.upsert({
     *   create: {
     *     // ... data to create a Pesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesanan we want to update
     *   }
     * })
     */
    upsert<T extends PesananUpsertArgs>(args: SelectSubset<T, PesananUpsertArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananCountArgs} args - Arguments to filter Pesanans to count.
     * @example
     * // Count the number of Pesanans
     * const count = await prisma.pesanan.count({
     *   where: {
     *     // ... the filter for the Pesanans we want to count
     *   }
     * })
    **/
    count<T extends PesananCountArgs>(
      args?: Subset<T, PesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PesananAggregateArgs>(args: Subset<T, PesananAggregateArgs>): Prisma.PrismaPromise<GetPesananAggregateType<T>>

    /**
     * Group by Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesananGroupByArgs['orderBy'] }
        : { orderBy?: PesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pesanan model
   */
  readonly fields: PesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pembeli<T extends PembeliDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembeliDefaultArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pesanan model
   */
  interface PesananFieldRefs {
    readonly id_pesanan: FieldRef<"Pesanan", 'Int'>
    readonly id_pelanggan: FieldRef<"Pesanan", 'Int'>
    readonly id_barang: FieldRef<"Pesanan", 'Int'>
    readonly qty: FieldRef<"Pesanan", 'Int'>
    readonly tgl_pesan: FieldRef<"Pesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pesanan findUnique
   */
  export type PesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan findUniqueOrThrow
   */
  export type PesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan findFirst
   */
  export type PesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan findFirstOrThrow
   */
  export type PesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan findMany
   */
  export type PesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanans to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan create
   */
  export type PesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to create a Pesanan.
     */
    data: XOR<PesananCreateInput, PesananUncheckedCreateInput>
  }

  /**
   * Pesanan createMany
   */
  export type PesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesanans.
     */
    data: PesananCreateManyInput | PesananCreateManyInput[]
  }

  /**
   * Pesanan createManyAndReturn
   */
  export type PesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * The data used to create many Pesanans.
     */
    data: PesananCreateManyInput | PesananCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesanan update
   */
  export type PesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to update a Pesanan.
     */
    data: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
    /**
     * Choose, which Pesanan to update.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan updateMany
   */
  export type PesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesanans.
     */
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyInput>
    /**
     * Filter which Pesanans to update
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number
  }

  /**
   * Pesanan updateManyAndReturn
   */
  export type PesananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * The data used to update Pesanans.
     */
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyInput>
    /**
     * Filter which Pesanans to update
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesanan upsert
   */
  export type PesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The filter to search for the Pesanan to update in case it exists.
     */
    where: PesananWhereUniqueInput
    /**
     * In case the Pesanan found by the `where` argument doesn't exist, create a new Pesanan with this data.
     */
    create: XOR<PesananCreateInput, PesananUncheckedCreateInput>
    /**
     * In case the Pesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
  }

  /**
   * Pesanan delete
   */
  export type PesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter which Pesanan to delete.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan deleteMany
   */
  export type PesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanans to delete
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to delete.
     */
    limit?: number
  }

  /**
   * Pesanan without action
   */
  export type PesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
  }


  /**
   * Model Pembelian
   */

  export type AggregatePembelian = {
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  export type PembelianAvgAggregateOutputType = {
    id_pembelian: number | null
    id_barang: number | null
    id_suplier: number | null
    qty: number | null
  }

  export type PembelianSumAggregateOutputType = {
    id_pembelian: number | null
    id_barang: number | null
    id_suplier: number | null
    qty: number | null
  }

  export type PembelianMinAggregateOutputType = {
    id_pembelian: number | null
    id_barang: number | null
    id_suplier: number | null
    qty: number | null
    tgl: Date | null
  }

  export type PembelianMaxAggregateOutputType = {
    id_pembelian: number | null
    id_barang: number | null
    id_suplier: number | null
    qty: number | null
    tgl: Date | null
  }

  export type PembelianCountAggregateOutputType = {
    id_pembelian: number
    id_barang: number
    id_suplier: number
    qty: number
    tgl: number
    _all: number
  }


  export type PembelianAvgAggregateInputType = {
    id_pembelian?: true
    id_barang?: true
    id_suplier?: true
    qty?: true
  }

  export type PembelianSumAggregateInputType = {
    id_pembelian?: true
    id_barang?: true
    id_suplier?: true
    qty?: true
  }

  export type PembelianMinAggregateInputType = {
    id_pembelian?: true
    id_barang?: true
    id_suplier?: true
    qty?: true
    tgl?: true
  }

  export type PembelianMaxAggregateInputType = {
    id_pembelian?: true
    id_barang?: true
    id_suplier?: true
    qty?: true
    tgl?: true
  }

  export type PembelianCountAggregateInputType = {
    id_pembelian?: true
    id_barang?: true
    id_suplier?: true
    qty?: true
    tgl?: true
    _all?: true
  }

  export type PembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelian to aggregate.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelians
    **/
    _count?: true | PembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembelianMaxAggregateInputType
  }

  export type GetPembelianAggregateType<T extends PembelianAggregateArgs> = {
        [P in keyof T & keyof AggregatePembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembelian[P]>
      : GetScalarType<T[P], AggregatePembelian[P]>
  }




  export type PembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithAggregationInput | PembelianOrderByWithAggregationInput[]
    by: PembelianScalarFieldEnum[] | PembelianScalarFieldEnum
    having?: PembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembelianCountAggregateInputType | true
    _avg?: PembelianAvgAggregateInputType
    _sum?: PembelianSumAggregateInputType
    _min?: PembelianMinAggregateInputType
    _max?: PembelianMaxAggregateInputType
  }

  export type PembelianGroupByOutputType = {
    id_pembelian: number
    id_barang: number
    id_suplier: number
    qty: number
    tgl: Date
    _count: PembelianCountAggregateOutputType | null
    _avg: PembelianAvgAggregateOutputType | null
    _sum: PembelianSumAggregateOutputType | null
    _min: PembelianMinAggregateOutputType | null
    _max: PembelianMaxAggregateOutputType | null
  }

  type GetPembelianGroupByPayload<T extends PembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembelianGroupByOutputType[P]>
            : GetScalarType<T[P], PembelianGroupByOutputType[P]>
        }
      >
    >


  export type PembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembelian?: boolean
    id_barang?: boolean
    id_suplier?: boolean
    qty?: boolean
    tgl?: boolean
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembelian?: boolean
    id_barang?: boolean
    id_suplier?: boolean
    qty?: boolean
    tgl?: boolean
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembelian?: boolean
    id_barang?: boolean
    id_suplier?: boolean
    qty?: boolean
    tgl?: boolean
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembelian"]>

  export type PembelianSelectScalar = {
    id_pembelian?: boolean
    id_barang?: boolean
    id_suplier?: boolean
    qty?: boolean
    tgl?: boolean
  }

  export type PembelianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pembelian" | "id_barang" | "id_suplier" | "qty" | "tgl", ExtArgs["result"]["pembelian"]>
  export type PembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }
  export type PembelianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }
  export type PembelianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Barang?: boolean | BarangDefaultArgs<ExtArgs>
    Suplier?: boolean | SuplierDefaultArgs<ExtArgs>
  }

  export type $PembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembelian"
    objects: {
      Barang: Prisma.$BarangPayload<ExtArgs>
      Suplier: Prisma.$SuplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pembelian: number
      id_barang: number
      id_suplier: number
      qty: number
      tgl: Date
    }, ExtArgs["result"]["pembelian"]>
    composites: {}
  }

  type PembelianGetPayload<S extends boolean | null | undefined | PembelianDefaultArgs> = $Result.GetResult<Prisma.$PembelianPayload, S>

  type PembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembelianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembelianCountAggregateInputType | true
    }

  export interface PembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembelian'], meta: { name: 'Pembelian' } }
    /**
     * Find zero or one Pembelian that matches the filter.
     * @param {PembelianFindUniqueArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembelianFindUniqueArgs>(args: SelectSubset<T, PembelianFindUniqueArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembelian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembelianFindUniqueOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, PembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembelianFindFirstArgs>(args?: SelectSubset<T, PembelianFindFirstArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindFirstOrThrowArgs} args - Arguments to find a Pembelian
     * @example
     * // Get one Pembelian
     * const pembelian = await prisma.pembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, PembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelians
     * const pembelians = await prisma.pembelian.findMany()
     * 
     * // Get first 10 Pembelians
     * const pembelians = await prisma.pembelian.findMany({ take: 10 })
     * 
     * // Only select the `id_pembelian`
     * const pembelianWithId_pembelianOnly = await prisma.pembelian.findMany({ select: { id_pembelian: true } })
     * 
     */
    findMany<T extends PembelianFindManyArgs>(args?: SelectSubset<T, PembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembelian.
     * @param {PembelianCreateArgs} args - Arguments to create a Pembelian.
     * @example
     * // Create one Pembelian
     * const Pembelian = await prisma.pembelian.create({
     *   data: {
     *     // ... data to create a Pembelian
     *   }
     * })
     * 
     */
    create<T extends PembelianCreateArgs>(args: SelectSubset<T, PembelianCreateArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembelians.
     * @param {PembelianCreateManyArgs} args - Arguments to create many Pembelians.
     * @example
     * // Create many Pembelians
     * const pembelian = await prisma.pembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembelianCreateManyArgs>(args?: SelectSubset<T, PembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembelians and returns the data saved in the database.
     * @param {PembelianCreateManyAndReturnArgs} args - Arguments to create many Pembelians.
     * @example
     * // Create many Pembelians
     * const pembelian = await prisma.pembelian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembelians and only return the `id_pembelian`
     * const pembelianWithId_pembelianOnly = await prisma.pembelian.createManyAndReturn({
     *   select: { id_pembelian: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembelianCreateManyAndReturnArgs>(args?: SelectSubset<T, PembelianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembelian.
     * @param {PembelianDeleteArgs} args - Arguments to delete one Pembelian.
     * @example
     * // Delete one Pembelian
     * const Pembelian = await prisma.pembelian.delete({
     *   where: {
     *     // ... filter to delete one Pembelian
     *   }
     * })
     * 
     */
    delete<T extends PembelianDeleteArgs>(args: SelectSubset<T, PembelianDeleteArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembelian.
     * @param {PembelianUpdateArgs} args - Arguments to update one Pembelian.
     * @example
     * // Update one Pembelian
     * const pembelian = await prisma.pembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembelianUpdateArgs>(args: SelectSubset<T, PembelianUpdateArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembelians.
     * @param {PembelianDeleteManyArgs} args - Arguments to filter Pembelians to delete.
     * @example
     * // Delete a few Pembelians
     * const { count } = await prisma.pembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembelianDeleteManyArgs>(args?: SelectSubset<T, PembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelians
     * const pembelian = await prisma.pembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembelianUpdateManyArgs>(args: SelectSubset<T, PembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelians and returns the data updated in the database.
     * @param {PembelianUpdateManyAndReturnArgs} args - Arguments to update many Pembelians.
     * @example
     * // Update many Pembelians
     * const pembelian = await prisma.pembelian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembelians and only return the `id_pembelian`
     * const pembelianWithId_pembelianOnly = await prisma.pembelian.updateManyAndReturn({
     *   select: { id_pembelian: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PembelianUpdateManyAndReturnArgs>(args: SelectSubset<T, PembelianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembelian.
     * @param {PembelianUpsertArgs} args - Arguments to update or create a Pembelian.
     * @example
     * // Update or create a Pembelian
     * const pembelian = await prisma.pembelian.upsert({
     *   create: {
     *     // ... data to create a Pembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembelian we want to update
     *   }
     * })
     */
    upsert<T extends PembelianUpsertArgs>(args: SelectSubset<T, PembelianUpsertArgs<ExtArgs>>): Prisma__PembelianClient<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianCountArgs} args - Arguments to filter Pembelians to count.
     * @example
     * // Count the number of Pembelians
     * const count = await prisma.pembelian.count({
     *   where: {
     *     // ... the filter for the Pembelians we want to count
     *   }
     * })
    **/
    count<T extends PembelianCountArgs>(
      args?: Subset<T, PembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PembelianAggregateArgs>(args: Subset<T, PembelianAggregateArgs>): Prisma.PrismaPromise<GetPembelianAggregateType<T>>

    /**
     * Group by Pembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembelianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembelianGroupByArgs['orderBy'] }
        : { orderBy?: PembelianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembelian model
   */
  readonly fields: PembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Suplier<T extends SuplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuplierDefaultArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pembelian model
   */
  interface PembelianFieldRefs {
    readonly id_pembelian: FieldRef<"Pembelian", 'Int'>
    readonly id_barang: FieldRef<"Pembelian", 'Int'>
    readonly id_suplier: FieldRef<"Pembelian", 'Int'>
    readonly qty: FieldRef<"Pembelian", 'Int'>
    readonly tgl: FieldRef<"Pembelian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembelian findUnique
   */
  export type PembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian findUniqueOrThrow
   */
  export type PembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian findFirst
   */
  export type PembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian findFirstOrThrow
   */
  export type PembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelian to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelians.
     */
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian findMany
   */
  export type PembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter, which Pembelians to fetch.
     */
    where?: PembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelians to fetch.
     */
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelians.
     */
    cursor?: PembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelians.
     */
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Pembelian create
   */
  export type PembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembelian.
     */
    data: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
  }

  /**
   * Pembelian createMany
   */
  export type PembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelians.
     */
    data: PembelianCreateManyInput | PembelianCreateManyInput[]
  }

  /**
   * Pembelian createManyAndReturn
   */
  export type PembelianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * The data used to create many Pembelians.
     */
    data: PembelianCreateManyInput | PembelianCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembelian update
   */
  export type PembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembelian.
     */
    data: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
    /**
     * Choose, which Pembelian to update.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian updateMany
   */
  export type PembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelians.
     */
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyInput>
    /**
     * Filter which Pembelians to update
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to update.
     */
    limit?: number
  }

  /**
   * Pembelian updateManyAndReturn
   */
  export type PembelianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * The data used to update Pembelians.
     */
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyInput>
    /**
     * Filter which Pembelians to update
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembelian upsert
   */
  export type PembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembelian to update in case it exists.
     */
    where: PembelianWhereUniqueInput
    /**
     * In case the Pembelian found by the `where` argument doesn't exist, create a new Pembelian with this data.
     */
    create: XOR<PembelianCreateInput, PembelianUncheckedCreateInput>
    /**
     * In case the Pembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembelianUpdateInput, PembelianUncheckedUpdateInput>
  }

  /**
   * Pembelian delete
   */
  export type PembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    /**
     * Filter which Pembelian to delete.
     */
    where: PembelianWhereUniqueInput
  }

  /**
   * Pembelian deleteMany
   */
  export type PembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelians to delete
     */
    where?: PembelianWhereInput
    /**
     * Limit how many Pembelians to delete.
     */
    limit?: number
  }

  /**
   * Pembelian without action
   */
  export type PembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
  }


  /**
   * Model Pembeli
   */

  export type AggregatePembeli = {
    _count: PembeliCountAggregateOutputType | null
    _avg: PembeliAvgAggregateOutputType | null
    _sum: PembeliSumAggregateOutputType | null
    _min: PembeliMinAggregateOutputType | null
    _max: PembeliMaxAggregateOutputType | null
  }

  export type PembeliAvgAggregateOutputType = {
    id_pembeli: number | null
  }

  export type PembeliSumAggregateOutputType = {
    id_pembeli: number | null
  }

  export type PembeliMinAggregateOutputType = {
    id_pembeli: number | null
    nama: string | null
    jns_kelamin: string | null
    alamat: string | null
    kode_pos: string | null
    kota: string | null
    tgl_lahir: Date | null
  }

  export type PembeliMaxAggregateOutputType = {
    id_pembeli: number | null
    nama: string | null
    jns_kelamin: string | null
    alamat: string | null
    kode_pos: string | null
    kota: string | null
    tgl_lahir: Date | null
  }

  export type PembeliCountAggregateOutputType = {
    id_pembeli: number
    nama: number
    jns_kelamin: number
    alamat: number
    kode_pos: number
    kota: number
    tgl_lahir: number
    _all: number
  }


  export type PembeliAvgAggregateInputType = {
    id_pembeli?: true
  }

  export type PembeliSumAggregateInputType = {
    id_pembeli?: true
  }

  export type PembeliMinAggregateInputType = {
    id_pembeli?: true
    nama?: true
    jns_kelamin?: true
    alamat?: true
    kode_pos?: true
    kota?: true
    tgl_lahir?: true
  }

  export type PembeliMaxAggregateInputType = {
    id_pembeli?: true
    nama?: true
    jns_kelamin?: true
    alamat?: true
    kode_pos?: true
    kota?: true
    tgl_lahir?: true
  }

  export type PembeliCountAggregateInputType = {
    id_pembeli?: true
    nama?: true
    jns_kelamin?: true
    alamat?: true
    kode_pos?: true
    kota?: true
    tgl_lahir?: true
    _all?: true
  }

  export type PembeliAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembeli to aggregate.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelis
    **/
    _count?: true | PembeliCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembeliAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembeliSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembeliMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembeliMaxAggregateInputType
  }

  export type GetPembeliAggregateType<T extends PembeliAggregateArgs> = {
        [P in keyof T & keyof AggregatePembeli]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembeli[P]>
      : GetScalarType<T[P], AggregatePembeli[P]>
  }




  export type PembeliGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembeliWhereInput
    orderBy?: PembeliOrderByWithAggregationInput | PembeliOrderByWithAggregationInput[]
    by: PembeliScalarFieldEnum[] | PembeliScalarFieldEnum
    having?: PembeliScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembeliCountAggregateInputType | true
    _avg?: PembeliAvgAggregateInputType
    _sum?: PembeliSumAggregateInputType
    _min?: PembeliMinAggregateInputType
    _max?: PembeliMaxAggregateInputType
  }

  export type PembeliGroupByOutputType = {
    id_pembeli: number
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date
    _count: PembeliCountAggregateOutputType | null
    _avg: PembeliAvgAggregateOutputType | null
    _sum: PembeliSumAggregateOutputType | null
    _min: PembeliMinAggregateOutputType | null
    _max: PembeliMaxAggregateOutputType | null
  }

  type GetPembeliGroupByPayload<T extends PembeliGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembeliGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembeliGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembeliGroupByOutputType[P]>
            : GetScalarType<T[P], PembeliGroupByOutputType[P]>
        }
      >
    >


  export type PembeliSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembeli?: boolean
    nama?: boolean
    jns_kelamin?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
    tgl_lahir?: boolean
    Pesanan?: boolean | Pembeli$PesananArgs<ExtArgs>
    _count?: boolean | PembeliCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembeli?: boolean
    nama?: boolean
    jns_kelamin?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
    tgl_lahir?: boolean
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pembeli?: boolean
    nama?: boolean
    jns_kelamin?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
    tgl_lahir?: boolean
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectScalar = {
    id_pembeli?: boolean
    nama?: boolean
    jns_kelamin?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
    tgl_lahir?: boolean
  }

  export type PembeliOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pembeli" | "nama" | "jns_kelamin" | "alamat" | "kode_pos" | "kota" | "tgl_lahir", ExtArgs["result"]["pembeli"]>
  export type PembeliInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pesanan?: boolean | Pembeli$PesananArgs<ExtArgs>
    _count?: boolean | PembeliCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PembeliIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PembeliIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PembeliPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembeli"
    objects: {
      Pesanan: Prisma.$PesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pembeli: number
      nama: string
      jns_kelamin: string
      alamat: string
      kode_pos: string
      kota: string
      tgl_lahir: Date
    }, ExtArgs["result"]["pembeli"]>
    composites: {}
  }

  type PembeliGetPayload<S extends boolean | null | undefined | PembeliDefaultArgs> = $Result.GetResult<Prisma.$PembeliPayload, S>

  type PembeliCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembeliFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembeliCountAggregateInputType | true
    }

  export interface PembeliDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembeli'], meta: { name: 'Pembeli' } }
    /**
     * Find zero or one Pembeli that matches the filter.
     * @param {PembeliFindUniqueArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembeliFindUniqueArgs>(args: SelectSubset<T, PembeliFindUniqueArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembeli that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembeliFindUniqueOrThrowArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembeliFindUniqueOrThrowArgs>(args: SelectSubset<T, PembeliFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembeli that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindFirstArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembeliFindFirstArgs>(args?: SelectSubset<T, PembeliFindFirstArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembeli that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindFirstOrThrowArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembeliFindFirstOrThrowArgs>(args?: SelectSubset<T, PembeliFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembelis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelis
     * const pembelis = await prisma.pembeli.findMany()
     * 
     * // Get first 10 Pembelis
     * const pembelis = await prisma.pembeli.findMany({ take: 10 })
     * 
     * // Only select the `id_pembeli`
     * const pembeliWithId_pembeliOnly = await prisma.pembeli.findMany({ select: { id_pembeli: true } })
     * 
     */
    findMany<T extends PembeliFindManyArgs>(args?: SelectSubset<T, PembeliFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembeli.
     * @param {PembeliCreateArgs} args - Arguments to create a Pembeli.
     * @example
     * // Create one Pembeli
     * const Pembeli = await prisma.pembeli.create({
     *   data: {
     *     // ... data to create a Pembeli
     *   }
     * })
     * 
     */
    create<T extends PembeliCreateArgs>(args: SelectSubset<T, PembeliCreateArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembelis.
     * @param {PembeliCreateManyArgs} args - Arguments to create many Pembelis.
     * @example
     * // Create many Pembelis
     * const pembeli = await prisma.pembeli.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembeliCreateManyArgs>(args?: SelectSubset<T, PembeliCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembelis and returns the data saved in the database.
     * @param {PembeliCreateManyAndReturnArgs} args - Arguments to create many Pembelis.
     * @example
     * // Create many Pembelis
     * const pembeli = await prisma.pembeli.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembelis and only return the `id_pembeli`
     * const pembeliWithId_pembeliOnly = await prisma.pembeli.createManyAndReturn({
     *   select: { id_pembeli: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembeliCreateManyAndReturnArgs>(args?: SelectSubset<T, PembeliCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembeli.
     * @param {PembeliDeleteArgs} args - Arguments to delete one Pembeli.
     * @example
     * // Delete one Pembeli
     * const Pembeli = await prisma.pembeli.delete({
     *   where: {
     *     // ... filter to delete one Pembeli
     *   }
     * })
     * 
     */
    delete<T extends PembeliDeleteArgs>(args: SelectSubset<T, PembeliDeleteArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembeli.
     * @param {PembeliUpdateArgs} args - Arguments to update one Pembeli.
     * @example
     * // Update one Pembeli
     * const pembeli = await prisma.pembeli.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembeliUpdateArgs>(args: SelectSubset<T, PembeliUpdateArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembelis.
     * @param {PembeliDeleteManyArgs} args - Arguments to filter Pembelis to delete.
     * @example
     * // Delete a few Pembelis
     * const { count } = await prisma.pembeli.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembeliDeleteManyArgs>(args?: SelectSubset<T, PembeliDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelis
     * const pembeli = await prisma.pembeli.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembeliUpdateManyArgs>(args: SelectSubset<T, PembeliUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelis and returns the data updated in the database.
     * @param {PembeliUpdateManyAndReturnArgs} args - Arguments to update many Pembelis.
     * @example
     * // Update many Pembelis
     * const pembeli = await prisma.pembeli.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembelis and only return the `id_pembeli`
     * const pembeliWithId_pembeliOnly = await prisma.pembeli.updateManyAndReturn({
     *   select: { id_pembeli: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PembeliUpdateManyAndReturnArgs>(args: SelectSubset<T, PembeliUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembeli.
     * @param {PembeliUpsertArgs} args - Arguments to update or create a Pembeli.
     * @example
     * // Update or create a Pembeli
     * const pembeli = await prisma.pembeli.upsert({
     *   create: {
     *     // ... data to create a Pembeli
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembeli we want to update
     *   }
     * })
     */
    upsert<T extends PembeliUpsertArgs>(args: SelectSubset<T, PembeliUpsertArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliCountArgs} args - Arguments to filter Pembelis to count.
     * @example
     * // Count the number of Pembelis
     * const count = await prisma.pembeli.count({
     *   where: {
     *     // ... the filter for the Pembelis we want to count
     *   }
     * })
    **/
    count<T extends PembeliCountArgs>(
      args?: Subset<T, PembeliCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembeliCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembeli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PembeliAggregateArgs>(args: Subset<T, PembeliAggregateArgs>): Prisma.PrismaPromise<GetPembeliAggregateType<T>>

    /**
     * Group by Pembeli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PembeliGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembeliGroupByArgs['orderBy'] }
        : { orderBy?: PembeliGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PembeliGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembeliGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembeli model
   */
  readonly fields: PembeliFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembeli.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembeliClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pesanan<T extends Pembeli$PesananArgs<ExtArgs> = {}>(args?: Subset<T, Pembeli$PesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pembeli model
   */
  interface PembeliFieldRefs {
    readonly id_pembeli: FieldRef<"Pembeli", 'Int'>
    readonly nama: FieldRef<"Pembeli", 'String'>
    readonly jns_kelamin: FieldRef<"Pembeli", 'String'>
    readonly alamat: FieldRef<"Pembeli", 'String'>
    readonly kode_pos: FieldRef<"Pembeli", 'String'>
    readonly kota: FieldRef<"Pembeli", 'String'>
    readonly tgl_lahir: FieldRef<"Pembeli", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembeli findUnique
   */
  export type PembeliFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli findUniqueOrThrow
   */
  export type PembeliFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli findFirst
   */
  export type PembeliFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelis.
     */
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli findFirstOrThrow
   */
  export type PembeliFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelis.
     */
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli findMany
   */
  export type PembeliFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembelis to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli create
   */
  export type PembeliCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembeli.
     */
    data: XOR<PembeliCreateInput, PembeliUncheckedCreateInput>
  }

  /**
   * Pembeli createMany
   */
  export type PembeliCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelis.
     */
    data: PembeliCreateManyInput | PembeliCreateManyInput[]
  }

  /**
   * Pembeli createManyAndReturn
   */
  export type PembeliCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * The data used to create many Pembelis.
     */
    data: PembeliCreateManyInput | PembeliCreateManyInput[]
  }

  /**
   * Pembeli update
   */
  export type PembeliUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembeli.
     */
    data: XOR<PembeliUpdateInput, PembeliUncheckedUpdateInput>
    /**
     * Choose, which Pembeli to update.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli updateMany
   */
  export type PembeliUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelis.
     */
    data: XOR<PembeliUpdateManyMutationInput, PembeliUncheckedUpdateManyInput>
    /**
     * Filter which Pembelis to update
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to update.
     */
    limit?: number
  }

  /**
   * Pembeli updateManyAndReturn
   */
  export type PembeliUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * The data used to update Pembelis.
     */
    data: XOR<PembeliUpdateManyMutationInput, PembeliUncheckedUpdateManyInput>
    /**
     * Filter which Pembelis to update
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to update.
     */
    limit?: number
  }

  /**
   * Pembeli upsert
   */
  export type PembeliUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembeli to update in case it exists.
     */
    where: PembeliWhereUniqueInput
    /**
     * In case the Pembeli found by the `where` argument doesn't exist, create a new Pembeli with this data.
     */
    create: XOR<PembeliCreateInput, PembeliUncheckedCreateInput>
    /**
     * In case the Pembeli was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembeliUpdateInput, PembeliUncheckedUpdateInput>
  }

  /**
   * Pembeli delete
   */
  export type PembeliDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter which Pembeli to delete.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli deleteMany
   */
  export type PembeliDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelis to delete
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to delete.
     */
    limit?: number
  }

  /**
   * Pembeli.Pesanan
   */
  export type Pembeli$PesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    cursor?: PesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pembeli without action
   */
  export type PembeliDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
  }


  /**
   * Model Suplier
   */

  export type AggregateSuplier = {
    _count: SuplierCountAggregateOutputType | null
    _avg: SuplierAvgAggregateOutputType | null
    _sum: SuplierSumAggregateOutputType | null
    _min: SuplierMinAggregateOutputType | null
    _max: SuplierMaxAggregateOutputType | null
  }

  export type SuplierAvgAggregateOutputType = {
    id_suplier: number | null
  }

  export type SuplierSumAggregateOutputType = {
    id_suplier: number | null
  }

  export type SuplierMinAggregateOutputType = {
    id_suplier: number | null
    nama: string | null
    alamat: string | null
    kode_pos: string | null
    kota: string | null
  }

  export type SuplierMaxAggregateOutputType = {
    id_suplier: number | null
    nama: string | null
    alamat: string | null
    kode_pos: string | null
    kota: string | null
  }

  export type SuplierCountAggregateOutputType = {
    id_suplier: number
    nama: number
    alamat: number
    kode_pos: number
    kota: number
    _all: number
  }


  export type SuplierAvgAggregateInputType = {
    id_suplier?: true
  }

  export type SuplierSumAggregateInputType = {
    id_suplier?: true
  }

  export type SuplierMinAggregateInputType = {
    id_suplier?: true
    nama?: true
    alamat?: true
    kode_pos?: true
    kota?: true
  }

  export type SuplierMaxAggregateInputType = {
    id_suplier?: true
    nama?: true
    alamat?: true
    kode_pos?: true
    kota?: true
  }

  export type SuplierCountAggregateInputType = {
    id_suplier?: true
    nama?: true
    alamat?: true
    kode_pos?: true
    kota?: true
    _all?: true
  }

  export type SuplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suplier to aggregate.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supliers
    **/
    _count?: true | SuplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuplierMaxAggregateInputType
  }

  export type GetSuplierAggregateType<T extends SuplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSuplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuplier[P]>
      : GetScalarType<T[P], AggregateSuplier[P]>
  }




  export type SuplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuplierWhereInput
    orderBy?: SuplierOrderByWithAggregationInput | SuplierOrderByWithAggregationInput[]
    by: SuplierScalarFieldEnum[] | SuplierScalarFieldEnum
    having?: SuplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuplierCountAggregateInputType | true
    _avg?: SuplierAvgAggregateInputType
    _sum?: SuplierSumAggregateInputType
    _min?: SuplierMinAggregateInputType
    _max?: SuplierMaxAggregateInputType
  }

  export type SuplierGroupByOutputType = {
    id_suplier: number
    nama: string
    alamat: string
    kode_pos: string
    kota: string
    _count: SuplierCountAggregateOutputType | null
    _avg: SuplierAvgAggregateOutputType | null
    _sum: SuplierSumAggregateOutputType | null
    _min: SuplierMinAggregateOutputType | null
    _max: SuplierMaxAggregateOutputType | null
  }

  type GetSuplierGroupByPayload<T extends SuplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuplierGroupByOutputType[P]>
            : GetScalarType<T[P], SuplierGroupByOutputType[P]>
        }
      >
    >


  export type SuplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suplier?: boolean
    nama?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
    Pembelian?: boolean | Suplier$PembelianArgs<ExtArgs>
    _count?: boolean | SuplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suplier?: boolean
    nama?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_suplier?: boolean
    nama?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
  }, ExtArgs["result"]["suplier"]>

  export type SuplierSelectScalar = {
    id_suplier?: boolean
    nama?: boolean
    alamat?: boolean
    kode_pos?: boolean
    kota?: boolean
  }

  export type SuplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_suplier" | "nama" | "alamat" | "kode_pos" | "kota", ExtArgs["result"]["suplier"]>
  export type SuplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pembelian?: boolean | Suplier$PembelianArgs<ExtArgs>
    _count?: boolean | SuplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suplier"
    objects: {
      Pembelian: Prisma.$PembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_suplier: number
      nama: string
      alamat: string
      kode_pos: string
      kota: string
    }, ExtArgs["result"]["suplier"]>
    composites: {}
  }

  type SuplierGetPayload<S extends boolean | null | undefined | SuplierDefaultArgs> = $Result.GetResult<Prisma.$SuplierPayload, S>

  type SuplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuplierCountAggregateInputType | true
    }

  export interface SuplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suplier'], meta: { name: 'Suplier' } }
    /**
     * Find zero or one Suplier that matches the filter.
     * @param {SuplierFindUniqueArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuplierFindUniqueArgs>(args: SelectSubset<T, SuplierFindUniqueArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuplierFindUniqueOrThrowArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SuplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindFirstArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuplierFindFirstArgs>(args?: SelectSubset<T, SuplierFindFirstArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindFirstOrThrowArgs} args - Arguments to find a Suplier
     * @example
     * // Get one Suplier
     * const suplier = await prisma.suplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SuplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supliers
     * const supliers = await prisma.suplier.findMany()
     * 
     * // Get first 10 Supliers
     * const supliers = await prisma.suplier.findMany({ take: 10 })
     * 
     * // Only select the `id_suplier`
     * const suplierWithId_suplierOnly = await prisma.suplier.findMany({ select: { id_suplier: true } })
     * 
     */
    findMany<T extends SuplierFindManyArgs>(args?: SelectSubset<T, SuplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suplier.
     * @param {SuplierCreateArgs} args - Arguments to create a Suplier.
     * @example
     * // Create one Suplier
     * const Suplier = await prisma.suplier.create({
     *   data: {
     *     // ... data to create a Suplier
     *   }
     * })
     * 
     */
    create<T extends SuplierCreateArgs>(args: SelectSubset<T, SuplierCreateArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supliers.
     * @param {SuplierCreateManyArgs} args - Arguments to create many Supliers.
     * @example
     * // Create many Supliers
     * const suplier = await prisma.suplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuplierCreateManyArgs>(args?: SelectSubset<T, SuplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supliers and returns the data saved in the database.
     * @param {SuplierCreateManyAndReturnArgs} args - Arguments to create many Supliers.
     * @example
     * // Create many Supliers
     * const suplier = await prisma.suplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supliers and only return the `id_suplier`
     * const suplierWithId_suplierOnly = await prisma.suplier.createManyAndReturn({
     *   select: { id_suplier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SuplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suplier.
     * @param {SuplierDeleteArgs} args - Arguments to delete one Suplier.
     * @example
     * // Delete one Suplier
     * const Suplier = await prisma.suplier.delete({
     *   where: {
     *     // ... filter to delete one Suplier
     *   }
     * })
     * 
     */
    delete<T extends SuplierDeleteArgs>(args: SelectSubset<T, SuplierDeleteArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suplier.
     * @param {SuplierUpdateArgs} args - Arguments to update one Suplier.
     * @example
     * // Update one Suplier
     * const suplier = await prisma.suplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuplierUpdateArgs>(args: SelectSubset<T, SuplierUpdateArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supliers.
     * @param {SuplierDeleteManyArgs} args - Arguments to filter Supliers to delete.
     * @example
     * // Delete a few Supliers
     * const { count } = await prisma.suplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuplierDeleteManyArgs>(args?: SelectSubset<T, SuplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supliers
     * const suplier = await prisma.suplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuplierUpdateManyArgs>(args: SelectSubset<T, SuplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supliers and returns the data updated in the database.
     * @param {SuplierUpdateManyAndReturnArgs} args - Arguments to update many Supliers.
     * @example
     * // Update many Supliers
     * const suplier = await prisma.suplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supliers and only return the `id_suplier`
     * const suplierWithId_suplierOnly = await prisma.suplier.updateManyAndReturn({
     *   select: { id_suplier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SuplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suplier.
     * @param {SuplierUpsertArgs} args - Arguments to update or create a Suplier.
     * @example
     * // Update or create a Suplier
     * const suplier = await prisma.suplier.upsert({
     *   create: {
     *     // ... data to create a Suplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suplier we want to update
     *   }
     * })
     */
    upsert<T extends SuplierUpsertArgs>(args: SelectSubset<T, SuplierUpsertArgs<ExtArgs>>): Prisma__SuplierClient<$Result.GetResult<Prisma.$SuplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierCountArgs} args - Arguments to filter Supliers to count.
     * @example
     * // Count the number of Supliers
     * const count = await prisma.suplier.count({
     *   where: {
     *     // ... the filter for the Supliers we want to count
     *   }
     * })
    **/
    count<T extends SuplierCountArgs>(
      args?: Subset<T, SuplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuplierAggregateArgs>(args: Subset<T, SuplierAggregateArgs>): Prisma.PrismaPromise<GetSuplierAggregateType<T>>

    /**
     * Group by Suplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuplierGroupByArgs['orderBy'] }
        : { orderBy?: SuplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suplier model
   */
  readonly fields: SuplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pembelian<T extends Suplier$PembelianArgs<ExtArgs> = {}>(args?: Subset<T, Suplier$PembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Suplier model
   */
  interface SuplierFieldRefs {
    readonly id_suplier: FieldRef<"Suplier", 'Int'>
    readonly nama: FieldRef<"Suplier", 'String'>
    readonly alamat: FieldRef<"Suplier", 'String'>
    readonly kode_pos: FieldRef<"Suplier", 'String'>
    readonly kota: FieldRef<"Suplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Suplier findUnique
   */
  export type SuplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier findUniqueOrThrow
   */
  export type SuplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier findFirst
   */
  export type SuplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supliers.
     */
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier findFirstOrThrow
   */
  export type SuplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Suplier to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supliers.
     */
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier findMany
   */
  export type SuplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter, which Supliers to fetch.
     */
    where?: SuplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supliers to fetch.
     */
    orderBy?: SuplierOrderByWithRelationInput | SuplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supliers.
     */
    cursor?: SuplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supliers.
     */
    skip?: number
    distinct?: SuplierScalarFieldEnum | SuplierScalarFieldEnum[]
  }

  /**
   * Suplier create
   */
  export type SuplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Suplier.
     */
    data: XOR<SuplierCreateInput, SuplierUncheckedCreateInput>
  }

  /**
   * Suplier createMany
   */
  export type SuplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supliers.
     */
    data: SuplierCreateManyInput | SuplierCreateManyInput[]
  }

  /**
   * Suplier createManyAndReturn
   */
  export type SuplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * The data used to create many Supliers.
     */
    data: SuplierCreateManyInput | SuplierCreateManyInput[]
  }

  /**
   * Suplier update
   */
  export type SuplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Suplier.
     */
    data: XOR<SuplierUpdateInput, SuplierUncheckedUpdateInput>
    /**
     * Choose, which Suplier to update.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier updateMany
   */
  export type SuplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supliers.
     */
    data: XOR<SuplierUpdateManyMutationInput, SuplierUncheckedUpdateManyInput>
    /**
     * Filter which Supliers to update
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to update.
     */
    limit?: number
  }

  /**
   * Suplier updateManyAndReturn
   */
  export type SuplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * The data used to update Supliers.
     */
    data: XOR<SuplierUpdateManyMutationInput, SuplierUncheckedUpdateManyInput>
    /**
     * Filter which Supliers to update
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to update.
     */
    limit?: number
  }

  /**
   * Suplier upsert
   */
  export type SuplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Suplier to update in case it exists.
     */
    where: SuplierWhereUniqueInput
    /**
     * In case the Suplier found by the `where` argument doesn't exist, create a new Suplier with this data.
     */
    create: XOR<SuplierCreateInput, SuplierUncheckedCreateInput>
    /**
     * In case the Suplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuplierUpdateInput, SuplierUncheckedUpdateInput>
  }

  /**
   * Suplier delete
   */
  export type SuplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
    /**
     * Filter which Suplier to delete.
     */
    where: SuplierWhereUniqueInput
  }

  /**
   * Suplier deleteMany
   */
  export type SuplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supliers to delete
     */
    where?: SuplierWhereInput
    /**
     * Limit how many Supliers to delete.
     */
    limit?: number
  }

  /**
   * Suplier.Pembelian
   */
  export type Suplier$PembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembelian
     */
    select?: PembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembelian
     */
    omit?: PembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembelianInclude<ExtArgs> | null
    where?: PembelianWhereInput
    orderBy?: PembelianOrderByWithRelationInput | PembelianOrderByWithRelationInput[]
    cursor?: PembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembelianScalarFieldEnum | PembelianScalarFieldEnum[]
  }

  /**
   * Suplier without action
   */
  export type SuplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suplier
     */
    select?: SuplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suplier
     */
    omit?: SuplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuplierInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BarangScalarFieldEnum: {
    id_barang: 'id_barang',
    nama: 'nama',
    varian: 'varian',
    harga_beli: 'harga_beli',
    harga_jual: 'harga_jual'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const PesananScalarFieldEnum: {
    id_pesanan: 'id_pesanan',
    id_pelanggan: 'id_pelanggan',
    id_barang: 'id_barang',
    qty: 'qty',
    tgl_pesan: 'tgl_pesan'
  };

  export type PesananScalarFieldEnum = (typeof PesananScalarFieldEnum)[keyof typeof PesananScalarFieldEnum]


  export const PembelianScalarFieldEnum: {
    id_pembelian: 'id_pembelian',
    id_barang: 'id_barang',
    id_suplier: 'id_suplier',
    qty: 'qty',
    tgl: 'tgl'
  };

  export type PembelianScalarFieldEnum = (typeof PembelianScalarFieldEnum)[keyof typeof PembelianScalarFieldEnum]


  export const PembeliScalarFieldEnum: {
    id_pembeli: 'id_pembeli',
    nama: 'nama',
    jns_kelamin: 'jns_kelamin',
    alamat: 'alamat',
    kode_pos: 'kode_pos',
    kota: 'kota',
    tgl_lahir: 'tgl_lahir'
  };

  export type PembeliScalarFieldEnum = (typeof PembeliScalarFieldEnum)[keyof typeof PembeliScalarFieldEnum]


  export const SuplierScalarFieldEnum: {
    id_suplier: 'id_suplier',
    nama: 'nama',
    alamat: 'alamat',
    kode_pos: 'kode_pos',
    kota: 'kota'
  };

  export type SuplierScalarFieldEnum = (typeof SuplierScalarFieldEnum)[keyof typeof SuplierScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id_barang?: IntFilter<"Barang"> | number
    nama?: StringFilter<"Barang"> | string
    varian?: StringNullableFilter<"Barang"> | string | null
    harga_beli?: FloatFilter<"Barang"> | number
    harga_jual?: FloatFilter<"Barang"> | number
    Pesanan?: PesananListRelationFilter
    Pembelian?: PembelianListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id_barang?: SortOrder
    nama?: SortOrder
    varian?: SortOrderInput | SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
    Pesanan?: PesananOrderByRelationAggregateInput
    Pembelian?: PembelianOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id_barang?: number
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    nama?: StringFilter<"Barang"> | string
    varian?: StringNullableFilter<"Barang"> | string | null
    harga_beli?: FloatFilter<"Barang"> | number
    harga_jual?: FloatFilter<"Barang"> | number
    Pesanan?: PesananListRelationFilter
    Pembelian?: PembelianListRelationFilter
  }, "id_barang">

  export type BarangOrderByWithAggregationInput = {
    id_barang?: SortOrder
    nama?: SortOrder
    varian?: SortOrderInput | SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
    _count?: BarangCountOrderByAggregateInput
    _avg?: BarangAvgOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
    _sum?: BarangSumOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id_barang?: IntWithAggregatesFilter<"Barang"> | number
    nama?: StringWithAggregatesFilter<"Barang"> | string
    varian?: StringNullableWithAggregatesFilter<"Barang"> | string | null
    harga_beli?: FloatWithAggregatesFilter<"Barang"> | number
    harga_jual?: FloatWithAggregatesFilter<"Barang"> | number
  }

  export type PesananWhereInput = {
    AND?: PesananWhereInput | PesananWhereInput[]
    OR?: PesananWhereInput[]
    NOT?: PesananWhereInput | PesananWhereInput[]
    id_pesanan?: IntFilter<"Pesanan"> | number
    id_pelanggan?: IntFilter<"Pesanan"> | number
    id_barang?: IntFilter<"Pesanan"> | number
    qty?: IntFilter<"Pesanan"> | number
    tgl_pesan?: DateTimeFilter<"Pesanan"> | Date | string
    Pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }

  export type PesananOrderByWithRelationInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
    tgl_pesan?: SortOrder
    Pembeli?: PembeliOrderByWithRelationInput
    Barang?: BarangOrderByWithRelationInput
  }

  export type PesananWhereUniqueInput = Prisma.AtLeast<{
    id_pesanan?: number
    AND?: PesananWhereInput | PesananWhereInput[]
    OR?: PesananWhereInput[]
    NOT?: PesananWhereInput | PesananWhereInput[]
    id_pelanggan?: IntFilter<"Pesanan"> | number
    id_barang?: IntFilter<"Pesanan"> | number
    qty?: IntFilter<"Pesanan"> | number
    tgl_pesan?: DateTimeFilter<"Pesanan"> | Date | string
    Pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }, "id_pesanan">

  export type PesananOrderByWithAggregationInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
    tgl_pesan?: SortOrder
    _count?: PesananCountOrderByAggregateInput
    _avg?: PesananAvgOrderByAggregateInput
    _max?: PesananMaxOrderByAggregateInput
    _min?: PesananMinOrderByAggregateInput
    _sum?: PesananSumOrderByAggregateInput
  }

  export type PesananScalarWhereWithAggregatesInput = {
    AND?: PesananScalarWhereWithAggregatesInput | PesananScalarWhereWithAggregatesInput[]
    OR?: PesananScalarWhereWithAggregatesInput[]
    NOT?: PesananScalarWhereWithAggregatesInput | PesananScalarWhereWithAggregatesInput[]
    id_pesanan?: IntWithAggregatesFilter<"Pesanan"> | number
    id_pelanggan?: IntWithAggregatesFilter<"Pesanan"> | number
    id_barang?: IntWithAggregatesFilter<"Pesanan"> | number
    qty?: IntWithAggregatesFilter<"Pesanan"> | number
    tgl_pesan?: DateTimeWithAggregatesFilter<"Pesanan"> | Date | string
  }

  export type PembelianWhereInput = {
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    id_pembelian?: IntFilter<"Pembelian"> | number
    id_barang?: IntFilter<"Pembelian"> | number
    id_suplier?: IntFilter<"Pembelian"> | number
    qty?: IntFilter<"Pembelian"> | number
    tgl?: DateTimeFilter<"Pembelian"> | Date | string
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
    Suplier?: XOR<SuplierScalarRelationFilter, SuplierWhereInput>
  }

  export type PembelianOrderByWithRelationInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
    tgl?: SortOrder
    Barang?: BarangOrderByWithRelationInput
    Suplier?: SuplierOrderByWithRelationInput
  }

  export type PembelianWhereUniqueInput = Prisma.AtLeast<{
    id_pembelian?: number
    AND?: PembelianWhereInput | PembelianWhereInput[]
    OR?: PembelianWhereInput[]
    NOT?: PembelianWhereInput | PembelianWhereInput[]
    id_barang?: IntFilter<"Pembelian"> | number
    id_suplier?: IntFilter<"Pembelian"> | number
    qty?: IntFilter<"Pembelian"> | number
    tgl?: DateTimeFilter<"Pembelian"> | Date | string
    Barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
    Suplier?: XOR<SuplierScalarRelationFilter, SuplierWhereInput>
  }, "id_pembelian">

  export type PembelianOrderByWithAggregationInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
    tgl?: SortOrder
    _count?: PembelianCountOrderByAggregateInput
    _avg?: PembelianAvgOrderByAggregateInput
    _max?: PembelianMaxOrderByAggregateInput
    _min?: PembelianMinOrderByAggregateInput
    _sum?: PembelianSumOrderByAggregateInput
  }

  export type PembelianScalarWhereWithAggregatesInput = {
    AND?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    OR?: PembelianScalarWhereWithAggregatesInput[]
    NOT?: PembelianScalarWhereWithAggregatesInput | PembelianScalarWhereWithAggregatesInput[]
    id_pembelian?: IntWithAggregatesFilter<"Pembelian"> | number
    id_barang?: IntWithAggregatesFilter<"Pembelian"> | number
    id_suplier?: IntWithAggregatesFilter<"Pembelian"> | number
    qty?: IntWithAggregatesFilter<"Pembelian"> | number
    tgl?: DateTimeWithAggregatesFilter<"Pembelian"> | Date | string
  }

  export type PembeliWhereInput = {
    AND?: PembeliWhereInput | PembeliWhereInput[]
    OR?: PembeliWhereInput[]
    NOT?: PembeliWhereInput | PembeliWhereInput[]
    id_pembeli?: IntFilter<"Pembeli"> | number
    nama?: StringFilter<"Pembeli"> | string
    jns_kelamin?: StringFilter<"Pembeli"> | string
    alamat?: StringFilter<"Pembeli"> | string
    kode_pos?: StringFilter<"Pembeli"> | string
    kota?: StringFilter<"Pembeli"> | string
    tgl_lahir?: DateTimeFilter<"Pembeli"> | Date | string
    Pesanan?: PesananListRelationFilter
  }

  export type PembeliOrderByWithRelationInput = {
    id_pembeli?: SortOrder
    nama?: SortOrder
    jns_kelamin?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    tgl_lahir?: SortOrder
    Pesanan?: PesananOrderByRelationAggregateInput
  }

  export type PembeliWhereUniqueInput = Prisma.AtLeast<{
    id_pembeli?: number
    AND?: PembeliWhereInput | PembeliWhereInput[]
    OR?: PembeliWhereInput[]
    NOT?: PembeliWhereInput | PembeliWhereInput[]
    nama?: StringFilter<"Pembeli"> | string
    jns_kelamin?: StringFilter<"Pembeli"> | string
    alamat?: StringFilter<"Pembeli"> | string
    kode_pos?: StringFilter<"Pembeli"> | string
    kota?: StringFilter<"Pembeli"> | string
    tgl_lahir?: DateTimeFilter<"Pembeli"> | Date | string
    Pesanan?: PesananListRelationFilter
  }, "id_pembeli">

  export type PembeliOrderByWithAggregationInput = {
    id_pembeli?: SortOrder
    nama?: SortOrder
    jns_kelamin?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    tgl_lahir?: SortOrder
    _count?: PembeliCountOrderByAggregateInput
    _avg?: PembeliAvgOrderByAggregateInput
    _max?: PembeliMaxOrderByAggregateInput
    _min?: PembeliMinOrderByAggregateInput
    _sum?: PembeliSumOrderByAggregateInput
  }

  export type PembeliScalarWhereWithAggregatesInput = {
    AND?: PembeliScalarWhereWithAggregatesInput | PembeliScalarWhereWithAggregatesInput[]
    OR?: PembeliScalarWhereWithAggregatesInput[]
    NOT?: PembeliScalarWhereWithAggregatesInput | PembeliScalarWhereWithAggregatesInput[]
    id_pembeli?: IntWithAggregatesFilter<"Pembeli"> | number
    nama?: StringWithAggregatesFilter<"Pembeli"> | string
    jns_kelamin?: StringWithAggregatesFilter<"Pembeli"> | string
    alamat?: StringWithAggregatesFilter<"Pembeli"> | string
    kode_pos?: StringWithAggregatesFilter<"Pembeli"> | string
    kota?: StringWithAggregatesFilter<"Pembeli"> | string
    tgl_lahir?: DateTimeWithAggregatesFilter<"Pembeli"> | Date | string
  }

  export type SuplierWhereInput = {
    AND?: SuplierWhereInput | SuplierWhereInput[]
    OR?: SuplierWhereInput[]
    NOT?: SuplierWhereInput | SuplierWhereInput[]
    id_suplier?: IntFilter<"Suplier"> | number
    nama?: StringFilter<"Suplier"> | string
    alamat?: StringFilter<"Suplier"> | string
    kode_pos?: StringFilter<"Suplier"> | string
    kota?: StringFilter<"Suplier"> | string
    Pembelian?: PembelianListRelationFilter
  }

  export type SuplierOrderByWithRelationInput = {
    id_suplier?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    Pembelian?: PembelianOrderByRelationAggregateInput
  }

  export type SuplierWhereUniqueInput = Prisma.AtLeast<{
    id_suplier?: number
    AND?: SuplierWhereInput | SuplierWhereInput[]
    OR?: SuplierWhereInput[]
    NOT?: SuplierWhereInput | SuplierWhereInput[]
    nama?: StringFilter<"Suplier"> | string
    alamat?: StringFilter<"Suplier"> | string
    kode_pos?: StringFilter<"Suplier"> | string
    kota?: StringFilter<"Suplier"> | string
    Pembelian?: PembelianListRelationFilter
  }, "id_suplier">

  export type SuplierOrderByWithAggregationInput = {
    id_suplier?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    _count?: SuplierCountOrderByAggregateInput
    _avg?: SuplierAvgOrderByAggregateInput
    _max?: SuplierMaxOrderByAggregateInput
    _min?: SuplierMinOrderByAggregateInput
    _sum?: SuplierSumOrderByAggregateInput
  }

  export type SuplierScalarWhereWithAggregatesInput = {
    AND?: SuplierScalarWhereWithAggregatesInput | SuplierScalarWhereWithAggregatesInput[]
    OR?: SuplierScalarWhereWithAggregatesInput[]
    NOT?: SuplierScalarWhereWithAggregatesInput | SuplierScalarWhereWithAggregatesInput[]
    id_suplier?: IntWithAggregatesFilter<"Suplier"> | number
    nama?: StringWithAggregatesFilter<"Suplier"> | string
    alamat?: StringWithAggregatesFilter<"Suplier"> | string
    kode_pos?: StringWithAggregatesFilter<"Suplier"> | string
    kota?: StringWithAggregatesFilter<"Suplier"> | string
  }

  export type BarangCreateInput = {
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pesanan?: PesananCreateNestedManyWithoutBarangInput
    Pembelian?: PembelianCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateInput = {
    id_barang?: number
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pesanan?: PesananUncheckedCreateNestedManyWithoutBarangInput
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pesanan?: PesananUpdateManyWithoutBarangNestedInput
    Pembelian?: PembelianUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pesanan?: PesananUncheckedUpdateManyWithoutBarangNestedInput
    Pembelian?: PembelianUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateManyInput = {
    id_barang?: number
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
  }

  export type BarangUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
  }

  export type BarangUncheckedUpdateManyInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
  }

  export type PesananCreateInput = {
    qty: number
    tgl_pesan: Date | string
    Pembeli: PembeliCreateNestedOneWithoutPesananInput
    Barang: BarangCreateNestedOneWithoutPesananInput
  }

  export type PesananUncheckedCreateInput = {
    id_pesanan?: number
    id_pelanggan: number
    id_barang: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PesananUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
    Pembeli?: PembeliUpdateOneRequiredWithoutPesananNestedInput
    Barang?: BarangUpdateOneRequiredWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_pelanggan?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananCreateManyInput = {
    id_pesanan?: number
    id_pelanggan: number
    id_barang: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PesananUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananUncheckedUpdateManyInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_pelanggan?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianCreateInput = {
    qty: number
    tgl: Date | string
    Barang: BarangCreateNestedOneWithoutPembelianInput
    Suplier: SuplierCreateNestedOneWithoutPembelianInput
  }

  export type PembelianUncheckedCreateInput = {
    id_pembelian?: number
    id_barang: number
    id_suplier: number
    qty: number
    tgl: Date | string
  }

  export type PembelianUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    Barang?: BarangUpdateOneRequiredWithoutPembelianNestedInput
    Suplier?: SuplierUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    id_suplier?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianCreateManyInput = {
    id_pembelian?: number
    id_barang: number
    id_suplier: number
    qty: number
    tgl: Date | string
  }

  export type PembelianUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianUncheckedUpdateManyInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    id_suplier?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembeliCreateInput = {
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date | string
    Pesanan?: PesananCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUncheckedCreateInput = {
    id_pembeli?: number
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date | string
    Pesanan?: PesananUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    Pesanan?: PesananUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliUncheckedUpdateInput = {
    id_pembeli?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    Pesanan?: PesananUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliCreateManyInput = {
    id_pembeli?: number
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date | string
  }

  export type PembeliUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembeliUncheckedUpdateManyInput = {
    id_pembeli?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuplierCreateInput = {
    nama: string
    alamat: string
    kode_pos: string
    kota: string
    Pembelian?: PembelianCreateNestedManyWithoutSuplierInput
  }

  export type SuplierUncheckedCreateInput = {
    id_suplier?: number
    nama: string
    alamat: string
    kode_pos: string
    kota: string
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutSuplierInput
  }

  export type SuplierUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUpdateManyWithoutSuplierNestedInput
  }

  export type SuplierUncheckedUpdateInput = {
    id_suplier?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    Pembelian?: PembelianUncheckedUpdateManyWithoutSuplierNestedInput
  }

  export type SuplierCreateManyInput = {
    id_suplier?: number
    nama: string
    alamat: string
    kode_pos: string
    kota: string
  }

  export type SuplierUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type SuplierUncheckedUpdateManyInput = {
    id_suplier?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PesananListRelationFilter = {
    every?: PesananWhereInput
    some?: PesananWhereInput
    none?: PesananWhereInput
  }

  export type PembelianListRelationFilter = {
    every?: PembelianWhereInput
    some?: PembelianWhereInput
    none?: PembelianWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id_barang?: SortOrder
    nama?: SortOrder
    varian?: SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
  }

  export type BarangAvgOrderByAggregateInput = {
    id_barang?: SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id_barang?: SortOrder
    nama?: SortOrder
    varian?: SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id_barang?: SortOrder
    nama?: SortOrder
    varian?: SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
  }

  export type BarangSumOrderByAggregateInput = {
    id_barang?: SortOrder
    harga_beli?: SortOrder
    harga_jual?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PembeliScalarRelationFilter = {
    is?: PembeliWhereInput
    isNot?: PembeliWhereInput
  }

  export type BarangScalarRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type PesananCountOrderByAggregateInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
    tgl_pesan?: SortOrder
  }

  export type PesananAvgOrderByAggregateInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
  }

  export type PesananMaxOrderByAggregateInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
    tgl_pesan?: SortOrder
  }

  export type PesananMinOrderByAggregateInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
    tgl_pesan?: SortOrder
  }

  export type PesananSumOrderByAggregateInput = {
    id_pesanan?: SortOrder
    id_pelanggan?: SortOrder
    id_barang?: SortOrder
    qty?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SuplierScalarRelationFilter = {
    is?: SuplierWhereInput
    isNot?: SuplierWhereInput
  }

  export type PembelianCountOrderByAggregateInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
    tgl?: SortOrder
  }

  export type PembelianAvgOrderByAggregateInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
  }

  export type PembelianMaxOrderByAggregateInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
    tgl?: SortOrder
  }

  export type PembelianMinOrderByAggregateInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
    tgl?: SortOrder
  }

  export type PembelianSumOrderByAggregateInput = {
    id_pembelian?: SortOrder
    id_barang?: SortOrder
    id_suplier?: SortOrder
    qty?: SortOrder
  }

  export type PembeliCountOrderByAggregateInput = {
    id_pembeli?: SortOrder
    nama?: SortOrder
    jns_kelamin?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    tgl_lahir?: SortOrder
  }

  export type PembeliAvgOrderByAggregateInput = {
    id_pembeli?: SortOrder
  }

  export type PembeliMaxOrderByAggregateInput = {
    id_pembeli?: SortOrder
    nama?: SortOrder
    jns_kelamin?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    tgl_lahir?: SortOrder
  }

  export type PembeliMinOrderByAggregateInput = {
    id_pembeli?: SortOrder
    nama?: SortOrder
    jns_kelamin?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
    tgl_lahir?: SortOrder
  }

  export type PembeliSumOrderByAggregateInput = {
    id_pembeli?: SortOrder
  }

  export type SuplierCountOrderByAggregateInput = {
    id_suplier?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
  }

  export type SuplierAvgOrderByAggregateInput = {
    id_suplier?: SortOrder
  }

  export type SuplierMaxOrderByAggregateInput = {
    id_suplier?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
  }

  export type SuplierMinOrderByAggregateInput = {
    id_suplier?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    kode_pos?: SortOrder
    kota?: SortOrder
  }

  export type SuplierSumOrderByAggregateInput = {
    id_suplier?: SortOrder
  }

  export type PesananCreateNestedManyWithoutBarangInput = {
    create?: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput> | PesananCreateWithoutBarangInput[] | PesananUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutBarangInput | PesananCreateOrConnectWithoutBarangInput[]
    createMany?: PesananCreateManyBarangInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type PembelianCreateNestedManyWithoutBarangInput = {
    create?: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput> | PembelianCreateWithoutBarangInput[] | PembelianUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutBarangInput | PembelianCreateOrConnectWithoutBarangInput[]
    createMany?: PembelianCreateManyBarangInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type PesananUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput> | PesananCreateWithoutBarangInput[] | PesananUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutBarangInput | PesananCreateOrConnectWithoutBarangInput[]
    createMany?: PesananCreateManyBarangInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type PembelianUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput> | PembelianCreateWithoutBarangInput[] | PembelianUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutBarangInput | PembelianCreateOrConnectWithoutBarangInput[]
    createMany?: PembelianCreateManyBarangInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PesananUpdateManyWithoutBarangNestedInput = {
    create?: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput> | PesananCreateWithoutBarangInput[] | PesananUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutBarangInput | PesananCreateOrConnectWithoutBarangInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutBarangInput | PesananUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: PesananCreateManyBarangInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutBarangInput | PesananUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutBarangInput | PesananUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PembelianUpdateManyWithoutBarangNestedInput = {
    create?: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput> | PembelianCreateWithoutBarangInput[] | PembelianUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutBarangInput | PembelianCreateOrConnectWithoutBarangInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutBarangInput | PembelianUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: PembelianCreateManyBarangInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutBarangInput | PembelianUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutBarangInput | PembelianUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PesananUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput> | PesananCreateWithoutBarangInput[] | PesananUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutBarangInput | PesananCreateOrConnectWithoutBarangInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutBarangInput | PesananUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: PesananCreateManyBarangInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutBarangInput | PesananUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutBarangInput | PesananUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PembelianUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput> | PembelianCreateWithoutBarangInput[] | PembelianUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutBarangInput | PembelianCreateOrConnectWithoutBarangInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutBarangInput | PembelianUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: PembelianCreateManyBarangInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutBarangInput | PembelianUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutBarangInput | PembelianUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type PembeliCreateNestedOneWithoutPesananInput = {
    create?: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPesananInput
    connect?: PembeliWhereUniqueInput
  }

  export type BarangCreateNestedOneWithoutPesananInput = {
    create?: XOR<BarangCreateWithoutPesananInput, BarangUncheckedCreateWithoutPesananInput>
    connectOrCreate?: BarangCreateOrConnectWithoutPesananInput
    connect?: BarangWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PembeliUpdateOneRequiredWithoutPesananNestedInput = {
    create?: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPesananInput
    upsert?: PembeliUpsertWithoutPesananInput
    connect?: PembeliWhereUniqueInput
    update?: XOR<XOR<PembeliUpdateToOneWithWhereWithoutPesananInput, PembeliUpdateWithoutPesananInput>, PembeliUncheckedUpdateWithoutPesananInput>
  }

  export type BarangUpdateOneRequiredWithoutPesananNestedInput = {
    create?: XOR<BarangCreateWithoutPesananInput, BarangUncheckedCreateWithoutPesananInput>
    connectOrCreate?: BarangCreateOrConnectWithoutPesananInput
    upsert?: BarangUpsertWithoutPesananInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutPesananInput, BarangUpdateWithoutPesananInput>, BarangUncheckedUpdateWithoutPesananInput>
  }

  export type BarangCreateNestedOneWithoutPembelianInput = {
    create?: XOR<BarangCreateWithoutPembelianInput, BarangUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: BarangCreateOrConnectWithoutPembelianInput
    connect?: BarangWhereUniqueInput
  }

  export type SuplierCreateNestedOneWithoutPembelianInput = {
    create?: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: SuplierCreateOrConnectWithoutPembelianInput
    connect?: SuplierWhereUniqueInput
  }

  export type BarangUpdateOneRequiredWithoutPembelianNestedInput = {
    create?: XOR<BarangCreateWithoutPembelianInput, BarangUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: BarangCreateOrConnectWithoutPembelianInput
    upsert?: BarangUpsertWithoutPembelianInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutPembelianInput, BarangUpdateWithoutPembelianInput>, BarangUncheckedUpdateWithoutPembelianInput>
  }

  export type SuplierUpdateOneRequiredWithoutPembelianNestedInput = {
    create?: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    connectOrCreate?: SuplierCreateOrConnectWithoutPembelianInput
    upsert?: SuplierUpsertWithoutPembelianInput
    connect?: SuplierWhereUniqueInput
    update?: XOR<XOR<SuplierUpdateToOneWithWhereWithoutPembelianInput, SuplierUpdateWithoutPembelianInput>, SuplierUncheckedUpdateWithoutPembelianInput>
  }

  export type PesananCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type PesananUncheckedCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type PesananUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPembeliInput | PesananUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPembeliInput | PesananUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPembeliInput | PesananUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PesananUncheckedUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPembeliInput | PesananUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPembeliInput | PesananUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPembeliInput | PesananUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PembelianCreateNestedManyWithoutSuplierInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type PembelianUncheckedCreateNestedManyWithoutSuplierInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
  }

  export type PembelianUpdateManyWithoutSuplierNestedInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutSuplierInput | PembelianUpsertWithWhereUniqueWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutSuplierInput | PembelianUpdateWithWhereUniqueWithoutSuplierInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutSuplierInput | PembelianUpdateManyWithWhereWithoutSuplierInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type PembelianUncheckedUpdateManyWithoutSuplierNestedInput = {
    create?: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput> | PembelianCreateWithoutSuplierInput[] | PembelianUncheckedCreateWithoutSuplierInput[]
    connectOrCreate?: PembelianCreateOrConnectWithoutSuplierInput | PembelianCreateOrConnectWithoutSuplierInput[]
    upsert?: PembelianUpsertWithWhereUniqueWithoutSuplierInput | PembelianUpsertWithWhereUniqueWithoutSuplierInput[]
    createMany?: PembelianCreateManySuplierInputEnvelope
    set?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    disconnect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    delete?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    connect?: PembelianWhereUniqueInput | PembelianWhereUniqueInput[]
    update?: PembelianUpdateWithWhereUniqueWithoutSuplierInput | PembelianUpdateWithWhereUniqueWithoutSuplierInput[]
    updateMany?: PembelianUpdateManyWithWhereWithoutSuplierInput | PembelianUpdateManyWithWhereWithoutSuplierInput[]
    deleteMany?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PesananCreateWithoutBarangInput = {
    qty: number
    tgl_pesan: Date | string
    Pembeli: PembeliCreateNestedOneWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutBarangInput = {
    id_pesanan?: number
    id_pelanggan: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PesananCreateOrConnectWithoutBarangInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput>
  }

  export type PesananCreateManyBarangInputEnvelope = {
    data: PesananCreateManyBarangInput | PesananCreateManyBarangInput[]
  }

  export type PembelianCreateWithoutBarangInput = {
    qty: number
    tgl: Date | string
    Suplier: SuplierCreateNestedOneWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutBarangInput = {
    id_pembelian?: number
    id_suplier: number
    qty: number
    tgl: Date | string
  }

  export type PembelianCreateOrConnectWithoutBarangInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput>
  }

  export type PembelianCreateManyBarangInputEnvelope = {
    data: PembelianCreateManyBarangInput | PembelianCreateManyBarangInput[]
  }

  export type PesananUpsertWithWhereUniqueWithoutBarangInput = {
    where: PesananWhereUniqueInput
    update: XOR<PesananUpdateWithoutBarangInput, PesananUncheckedUpdateWithoutBarangInput>
    create: XOR<PesananCreateWithoutBarangInput, PesananUncheckedCreateWithoutBarangInput>
  }

  export type PesananUpdateWithWhereUniqueWithoutBarangInput = {
    where: PesananWhereUniqueInput
    data: XOR<PesananUpdateWithoutBarangInput, PesananUncheckedUpdateWithoutBarangInput>
  }

  export type PesananUpdateManyWithWhereWithoutBarangInput = {
    where: PesananScalarWhereInput
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyWithoutBarangInput>
  }

  export type PesananScalarWhereInput = {
    AND?: PesananScalarWhereInput | PesananScalarWhereInput[]
    OR?: PesananScalarWhereInput[]
    NOT?: PesananScalarWhereInput | PesananScalarWhereInput[]
    id_pesanan?: IntFilter<"Pesanan"> | number
    id_pelanggan?: IntFilter<"Pesanan"> | number
    id_barang?: IntFilter<"Pesanan"> | number
    qty?: IntFilter<"Pesanan"> | number
    tgl_pesan?: DateTimeFilter<"Pesanan"> | Date | string
  }

  export type PembelianUpsertWithWhereUniqueWithoutBarangInput = {
    where: PembelianWhereUniqueInput
    update: XOR<PembelianUpdateWithoutBarangInput, PembelianUncheckedUpdateWithoutBarangInput>
    create: XOR<PembelianCreateWithoutBarangInput, PembelianUncheckedCreateWithoutBarangInput>
  }

  export type PembelianUpdateWithWhereUniqueWithoutBarangInput = {
    where: PembelianWhereUniqueInput
    data: XOR<PembelianUpdateWithoutBarangInput, PembelianUncheckedUpdateWithoutBarangInput>
  }

  export type PembelianUpdateManyWithWhereWithoutBarangInput = {
    where: PembelianScalarWhereInput
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyWithoutBarangInput>
  }

  export type PembelianScalarWhereInput = {
    AND?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    OR?: PembelianScalarWhereInput[]
    NOT?: PembelianScalarWhereInput | PembelianScalarWhereInput[]
    id_pembelian?: IntFilter<"Pembelian"> | number
    id_barang?: IntFilter<"Pembelian"> | number
    id_suplier?: IntFilter<"Pembelian"> | number
    qty?: IntFilter<"Pembelian"> | number
    tgl?: DateTimeFilter<"Pembelian"> | Date | string
  }

  export type PembeliCreateWithoutPesananInput = {
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date | string
  }

  export type PembeliUncheckedCreateWithoutPesananInput = {
    id_pembeli?: number
    nama: string
    jns_kelamin: string
    alamat: string
    kode_pos: string
    kota: string
    tgl_lahir: Date | string
  }

  export type PembeliCreateOrConnectWithoutPesananInput = {
    where: PembeliWhereUniqueInput
    create: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
  }

  export type BarangCreateWithoutPesananInput = {
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pembelian?: PembelianCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutPesananInput = {
    id_barang?: number
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pembelian?: PembelianUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutPesananInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutPesananInput, BarangUncheckedCreateWithoutPesananInput>
  }

  export type PembeliUpsertWithoutPesananInput = {
    update: XOR<PembeliUpdateWithoutPesananInput, PembeliUncheckedUpdateWithoutPesananInput>
    create: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    where?: PembeliWhereInput
  }

  export type PembeliUpdateToOneWithWhereWithoutPesananInput = {
    where?: PembeliWhereInput
    data: XOR<PembeliUpdateWithoutPesananInput, PembeliUncheckedUpdateWithoutPesananInput>
  }

  export type PembeliUpdateWithoutPesananInput = {
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembeliUncheckedUpdateWithoutPesananInput = {
    id_pembeli?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    jns_kelamin?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUpsertWithoutPesananInput = {
    update: XOR<BarangUpdateWithoutPesananInput, BarangUncheckedUpdateWithoutPesananInput>
    create: XOR<BarangCreateWithoutPesananInput, BarangUncheckedCreateWithoutPesananInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutPesananInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutPesananInput, BarangUncheckedUpdateWithoutPesananInput>
  }

  export type BarangUpdateWithoutPesananInput = {
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pembelian?: PembelianUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutPesananInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pembelian?: PembelianUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateWithoutPembelianInput = {
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pesanan?: PesananCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutPembelianInput = {
    id_barang?: number
    nama: string
    varian?: string | null
    harga_beli: number
    harga_jual: number
    Pesanan?: PesananUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutPembelianInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutPembelianInput, BarangUncheckedCreateWithoutPembelianInput>
  }

  export type SuplierCreateWithoutPembelianInput = {
    nama: string
    alamat: string
    kode_pos: string
    kota: string
  }

  export type SuplierUncheckedCreateWithoutPembelianInput = {
    id_suplier?: number
    nama: string
    alamat: string
    kode_pos: string
    kota: string
  }

  export type SuplierCreateOrConnectWithoutPembelianInput = {
    where: SuplierWhereUniqueInput
    create: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
  }

  export type BarangUpsertWithoutPembelianInput = {
    update: XOR<BarangUpdateWithoutPembelianInput, BarangUncheckedUpdateWithoutPembelianInput>
    create: XOR<BarangCreateWithoutPembelianInput, BarangUncheckedCreateWithoutPembelianInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutPembelianInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutPembelianInput, BarangUncheckedUpdateWithoutPembelianInput>
  }

  export type BarangUpdateWithoutPembelianInput = {
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pesanan?: PesananUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutPembelianInput = {
    id_barang?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    varian?: NullableStringFieldUpdateOperationsInput | string | null
    harga_beli?: FloatFieldUpdateOperationsInput | number
    harga_jual?: FloatFieldUpdateOperationsInput | number
    Pesanan?: PesananUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type SuplierUpsertWithoutPembelianInput = {
    update: XOR<SuplierUpdateWithoutPembelianInput, SuplierUncheckedUpdateWithoutPembelianInput>
    create: XOR<SuplierCreateWithoutPembelianInput, SuplierUncheckedCreateWithoutPembelianInput>
    where?: SuplierWhereInput
  }

  export type SuplierUpdateToOneWithWhereWithoutPembelianInput = {
    where?: SuplierWhereInput
    data: XOR<SuplierUpdateWithoutPembelianInput, SuplierUncheckedUpdateWithoutPembelianInput>
  }

  export type SuplierUpdateWithoutPembelianInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type SuplierUncheckedUpdateWithoutPembelianInput = {
    id_suplier?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    kode_pos?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type PesananCreateWithoutPembeliInput = {
    qty: number
    tgl_pesan: Date | string
    Barang: BarangCreateNestedOneWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutPembeliInput = {
    id_pesanan?: number
    id_barang: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PesananCreateOrConnectWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananCreateManyPembeliInputEnvelope = {
    data: PesananCreateManyPembeliInput | PesananCreateManyPembeliInput[]
  }

  export type PesananUpsertWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    update: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananUpdateWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    data: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
  }

  export type PesananUpdateManyWithWhereWithoutPembeliInput = {
    where: PesananScalarWhereInput
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyWithoutPembeliInput>
  }

  export type PembelianCreateWithoutSuplierInput = {
    qty: number
    tgl: Date | string
    Barang: BarangCreateNestedOneWithoutPembelianInput
  }

  export type PembelianUncheckedCreateWithoutSuplierInput = {
    id_pembelian?: number
    id_barang: number
    qty: number
    tgl: Date | string
  }

  export type PembelianCreateOrConnectWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    create: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput>
  }

  export type PembelianCreateManySuplierInputEnvelope = {
    data: PembelianCreateManySuplierInput | PembelianCreateManySuplierInput[]
  }

  export type PembelianUpsertWithWhereUniqueWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    update: XOR<PembelianUpdateWithoutSuplierInput, PembelianUncheckedUpdateWithoutSuplierInput>
    create: XOR<PembelianCreateWithoutSuplierInput, PembelianUncheckedCreateWithoutSuplierInput>
  }

  export type PembelianUpdateWithWhereUniqueWithoutSuplierInput = {
    where: PembelianWhereUniqueInput
    data: XOR<PembelianUpdateWithoutSuplierInput, PembelianUncheckedUpdateWithoutSuplierInput>
  }

  export type PembelianUpdateManyWithWhereWithoutSuplierInput = {
    where: PembelianScalarWhereInput
    data: XOR<PembelianUpdateManyMutationInput, PembelianUncheckedUpdateManyWithoutSuplierInput>
  }

  export type PesananCreateManyBarangInput = {
    id_pesanan?: number
    id_pelanggan: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PembelianCreateManyBarangInput = {
    id_pembelian?: number
    id_suplier: number
    qty: number
    tgl: Date | string
  }

  export type PesananUpdateWithoutBarangInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
    Pembeli?: PembeliUpdateOneRequiredWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutBarangInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_pelanggan?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananUncheckedUpdateManyWithoutBarangInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_pelanggan?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianUpdateWithoutBarangInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    Suplier?: SuplierUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutBarangInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_suplier?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianUncheckedUpdateManyWithoutBarangInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_suplier?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananCreateManyPembeliInput = {
    id_pesanan?: number
    id_barang: number
    qty: number
    tgl_pesan: Date | string
  }

  export type PesananUpdateWithoutPembeliInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
    Barang?: BarangUpdateOneRequiredWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutPembeliInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananUncheckedUpdateManyWithoutPembeliInput = {
    id_pesanan?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl_pesan?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianCreateManySuplierInput = {
    id_pembelian?: number
    id_barang: number
    qty: number
    tgl: Date | string
  }

  export type PembelianUpdateWithoutSuplierInput = {
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
    Barang?: BarangUpdateOneRequiredWithoutPembelianNestedInput
  }

  export type PembelianUncheckedUpdateWithoutSuplierInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembelianUncheckedUpdateManyWithoutSuplierInput = {
    id_pembelian?: IntFieldUpdateOperationsInput | number
    id_barang?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    tgl?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}