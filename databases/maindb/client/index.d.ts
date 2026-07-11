
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model Stream
 * 
 */
export type Stream = $Result.DefaultSelection<Prisma.$StreamPayload>
/**
 * Model StreamSubscription
 * 
 */
export type StreamSubscription = $Result.DefaultSelection<Prisma.$StreamSubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ActivityLogActionType: {
  READ: 'READ',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type ActivityLogActionType = (typeof ActivityLogActionType)[keyof typeof ActivityLogActionType]


export const ActivityLogEntityType: {
  USER: 'USER',
  SESSION: 'SESSION'
};

export type ActivityLogEntityType = (typeof ActivityLogEntityType)[keyof typeof ActivityLogEntityType]


export const StreamStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus]


export const StreamTag: {
  NEWS: 'NEWS'
};

export type StreamTag = (typeof StreamTag)[keyof typeof StreamTag]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ActivityLogActionType = $Enums.ActivityLogActionType

export const ActivityLogActionType: typeof $Enums.ActivityLogActionType

export type ActivityLogEntityType = $Enums.ActivityLogEntityType

export const ActivityLogEntityType: typeof $Enums.ActivityLogEntityType

export type StreamStatus = $Enums.StreamStatus

export const StreamStatus: typeof $Enums.StreamStatus

export type StreamTag = $Enums.StreamTag

export const StreamTag: typeof $Enums.StreamTag

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.StreamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamSubscription`: Exposes CRUD operations for the **StreamSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamSubscriptions
    * const streamSubscriptions = await prisma.streamSubscription.findMany()
    * ```
    */
  get streamSubscription(): Prisma.StreamSubscriptionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Test: 'Test',
    User: 'User',
    Session: 'Session',
    ActivityLog: 'ActivityLog',
    Stream: 'Stream',
    StreamSubscription: 'StreamSubscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "test" | "user" | "session" | "activityLog" | "stream" | "streamSubscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      Stream: {
        payload: Prisma.$StreamPayload<ExtArgs>
        fields: Prisma.StreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findFirst: {
            args: Prisma.StreamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findMany: {
            args: Prisma.StreamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          create: {
            args: Prisma.StreamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          createMany: {
            args: Prisma.StreamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          delete: {
            args: Prisma.StreamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          update: {
            args: Prisma.StreamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          deleteMany: {
            args: Prisma.StreamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          upsert: {
            args: Prisma.StreamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.StreamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamCountArgs<ExtArgs>
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      StreamSubscription: {
        payload: Prisma.$StreamSubscriptionPayload<ExtArgs>
        fields: Prisma.StreamSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.StreamSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          findMany: {
            args: Prisma.StreamSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>[]
          }
          create: {
            args: Prisma.StreamSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          createMany: {
            args: Prisma.StreamSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.StreamSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          update: {
            args: Prisma.StreamSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.StreamSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.StreamSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.StreamSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamSubscription>
          }
          groupBy: {
            args: Prisma.StreamSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<StreamSubscriptionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    test?: TestOmit
    user?: UserOmit
    session?: SessionOmit
    activityLog?: ActivityLogOmit
    stream?: StreamOmit
    streamSubscription?: StreamSubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    activityLogs: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSubscriptionWhereInput
  }


  /**
   * Count Type StreamCountOutputType
   */

  export type StreamCountOutputType = {
    subscriptions: number
  }

  export type StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | StreamCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamCountOutputType
     */
    select?: StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly text: FieldRef<"Test", 'String'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    failedLoginAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    failedLoginAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    failedLoginAttempts: number | null
    lastLoginAttempt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
    failedLoginAttempts: number | null
    lastLoginAttempt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiry: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    status: number
    role: number
    failedLoginAttempts: number
    lastLoginAttempt: number
    resetPasswordToken: number
    resetPasswordTokenExpiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    failedLoginAttempts?: true
  }

  export type UserSumAggregateInputType = {
    failedLoginAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    role?: true
    failedLoginAttempts?: true
    lastLoginAttempt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    role?: true
    failedLoginAttempts?: true
    lastLoginAttempt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    role?: true
    failedLoginAttempts?: true
    lastLoginAttempt?: true
    resetPasswordToken?: true
    resetPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string | null
    status: $Enums.UserStatus
    role: $Enums.UserRole
    failedLoginAttempts: number
    lastLoginAttempt: Date | null
    resetPasswordToken: string | null
    resetPasswordTokenExpiry: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    role?: boolean
    failedLoginAttempts?: boolean
    lastLoginAttempt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    role?: boolean
    failedLoginAttempts?: boolean
    lastLoginAttempt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    role?: boolean
    failedLoginAttempts?: boolean
    lastLoginAttempt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    role?: boolean
    failedLoginAttempts?: boolean
    lastLoginAttempt?: boolean
    resetPasswordToken?: boolean
    resetPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "status" | "role" | "failedLoginAttempts" | "lastLoginAttempt" | "resetPasswordToken" | "resetPasswordTokenExpiry" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      subscriptions: Prisma.$StreamSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      password: string | null
      status: $Enums.UserStatus
      role: $Enums.UserRole
      failedLoginAttempts: number
      lastLoginAttempt: Date | null
      resetPasswordToken: string | null
      resetPasswordTokenExpiry: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly failedLoginAttempts: FieldRef<"User", 'Int'>
    readonly lastLoginAttempt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordTokenExpiry: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    where?: StreamSubscriptionWhereInput
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    cursor?: StreamSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamSubscriptionScalarFieldEnum | StreamSubscriptionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    ipAddress: number
    userAgent: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    token: string
    userId: string
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "ipAddress" | "userAgent" | "expiresAt" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      ipAddress: string | null
      userAgent: string | null
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly deletedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    publicId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    publicId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    publicId: number | null
    userId: string | null
    type: $Enums.ActivityLogActionType | null
    entityType: $Enums.ActivityLogEntityType | null
    entityId: string | null
    description: string | null
    systemLog: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    publicId: number | null
    userId: string | null
    type: $Enums.ActivityLogActionType | null
    entityType: $Enums.ActivityLogEntityType | null
    entityId: string | null
    description: string | null
    systemLog: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    publicId: number
    userId: number
    type: number
    entityType: number
    entityId: number
    description: number
    systemLog: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    publicId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    publicId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    publicId?: true
    userId?: true
    type?: true
    entityType?: true
    entityId?: true
    description?: true
    systemLog?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    publicId?: true
    userId?: true
    type?: true
    entityType?: true
    entityId?: true
    description?: true
    systemLog?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    publicId?: true
    userId?: true
    type?: true
    entityType?: true
    entityId?: true
    description?: true
    systemLog?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    publicId: number
    userId: string | null
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description: string | null
    systemLog: boolean
    createdAt: Date
    updatedAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    userId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    systemLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    userId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    systemLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicId?: boolean
    userId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    systemLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    publicId?: boolean
    userId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    systemLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicId" | "userId" | "type" | "entityType" | "entityId" | "description" | "systemLog" | "createdAt" | "updatedAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicId: number
      userId: string | null
      type: $Enums.ActivityLogActionType
      entityType: $Enums.ActivityLogEntityType
      entityId: string
      description: string | null
      systemLog: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly publicId: FieldRef<"ActivityLog", 'Int'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'ActivityLogActionType'>
    readonly entityType: FieldRef<"ActivityLog", 'ActivityLogEntityType'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly systemLog: FieldRef<"ActivityLog", 'Boolean'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model Stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamAvgAggregateOutputType = {
    price: number | null
    availability: number | null
  }

  export type StreamSumAggregateOutputType = {
    price: number | null
    availability: number[]
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    excerpt: string | null
    description: string | null
    marketingTitle: string | null
    imageUrl: string | null
    status: $Enums.StreamStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    excerpt: string | null
    description: string | null
    marketingTitle: string | null
    imageUrl: string | null
    status: $Enums.StreamStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    name: number
    price: number
    excerpt: number
    description: number
    marketingTitle: number
    bulletPoints: number
    imageUrl: number
    tags: number
    status: number
    availability: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamAvgAggregateInputType = {
    price?: true
    availability?: true
  }

  export type StreamSumAggregateInputType = {
    price?: true
    availability?: true
  }

  export type StreamMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    excerpt?: true
    description?: true
    marketingTitle?: true
    imageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    excerpt?: true
    description?: true
    marketingTitle?: true
    imageUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    excerpt?: true
    description?: true
    marketingTitle?: true
    bulletPoints?: true
    imageUrl?: true
    tags?: true
    status?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stream to aggregate.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type StreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithAggregationInput | StreamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _avg?: StreamAvgAggregateInputType
    _sum?: StreamSumAggregateInputType
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    id: string
    name: string
    price: number
    excerpt: string
    description: string | null
    marketingTitle: string | null
    bulletPoints: string[]
    imageUrl: string | null
    tags: $Enums.StreamTag[]
    status: $Enums.StreamStatus
    availability: number[]
    createdAt: Date
    updatedAt: Date
    _count: StreamCountAggregateOutputType | null
    _avg: StreamAvgAggregateOutputType | null
    _sum: StreamSumAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends StreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type StreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    excerpt?: boolean
    description?: boolean
    marketingTitle?: boolean
    bulletPoints?: boolean
    imageUrl?: boolean
    tags?: boolean
    status?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | Stream$subscriptionsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    excerpt?: boolean
    description?: boolean
    marketingTitle?: boolean
    bulletPoints?: boolean
    imageUrl?: boolean
    tags?: boolean
    status?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    excerpt?: boolean
    description?: boolean
    marketingTitle?: boolean
    bulletPoints?: boolean
    imageUrl?: boolean
    tags?: boolean
    status?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    excerpt?: boolean
    description?: boolean
    marketingTitle?: boolean
    bulletPoints?: boolean
    imageUrl?: boolean
    tags?: boolean
    status?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "excerpt" | "description" | "marketingTitle" | "bulletPoints" | "imageUrl" | "tags" | "status" | "availability" | "createdAt" | "updatedAt", ExtArgs["result"]["stream"]>
  export type StreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Stream$subscriptionsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StreamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stream"
    objects: {
      subscriptions: Prisma.$StreamSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      excerpt: string
      description: string | null
      marketingTitle: string | null
      bulletPoints: string[]
      imageUrl: string | null
      tags: $Enums.StreamTag[]
      status: $Enums.StreamStatus
      availability: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }

  type StreamGetPayload<S extends boolean | null | undefined | StreamDefaultArgs> = $Result.GetResult<Prisma.$StreamPayload, S>

  type StreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface StreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stream'], meta: { name: 'Stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {StreamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamFindUniqueArgs>(args: SelectSubset<T, StreamFindUniqueArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamFindFirstArgs>(args?: SelectSubset<T, StreamFindFirstArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamFindManyArgs>(args?: SelectSubset<T, StreamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stream.
     * @param {StreamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
     */
    create<T extends StreamCreateArgs>(args: SelectSubset<T, StreamCreateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {StreamCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamCreateManyArgs>(args?: SelectSubset<T, StreamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {StreamCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stream.
     * @param {StreamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
     */
    delete<T extends StreamDeleteArgs>(args: SelectSubset<T, StreamDeleteArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stream.
     * @param {StreamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamUpdateArgs>(args: SelectSubset<T, StreamUpdateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {StreamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamDeleteManyArgs>(args?: SelectSubset<T, StreamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamUpdateManyArgs>(args: SelectSubset<T, StreamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {StreamUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends StreamUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stream.
     * @param {StreamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
     */
    upsert<T extends StreamUpsertArgs>(args: SelectSubset<T, StreamUpsertArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamCountArgs>(
      args?: Subset<T, StreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamGroupByArgs} args - Group by arguments.
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
      T extends StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamGroupByArgs['orderBy'] }
        : { orderBy?: StreamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stream model
   */
  readonly fields: StreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Stream$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Stream$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stream model
   */
  interface StreamFieldRefs {
    readonly id: FieldRef<"Stream", 'String'>
    readonly name: FieldRef<"Stream", 'String'>
    readonly price: FieldRef<"Stream", 'Float'>
    readonly excerpt: FieldRef<"Stream", 'String'>
    readonly description: FieldRef<"Stream", 'String'>
    readonly marketingTitle: FieldRef<"Stream", 'String'>
    readonly bulletPoints: FieldRef<"Stream", 'String[]'>
    readonly imageUrl: FieldRef<"Stream", 'String'>
    readonly tags: FieldRef<"Stream", 'StreamTag[]'>
    readonly status: FieldRef<"Stream", 'StreamStatus'>
    readonly availability: FieldRef<"Stream", 'Int[]'>
    readonly createdAt: FieldRef<"Stream", 'DateTime'>
    readonly updatedAt: FieldRef<"Stream", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stream findUnique
   */
  export type StreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findUniqueOrThrow
   */
  export type StreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findFirst
   */
  export type StreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findFirstOrThrow
   */
  export type StreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findMany
   */
  export type StreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream create
   */
  export type StreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to create a Stream.
     */
    data: XOR<StreamCreateInput, StreamUncheckedCreateInput>
  }

  /**
   * Stream createMany
   */
  export type StreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stream createManyAndReturn
   */
  export type StreamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stream update
   */
  export type StreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to update a Stream.
     */
    data: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
    /**
     * Choose, which Stream to update.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream updateMany
   */
  export type StreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
  }

  /**
   * Stream updateManyAndReturn
   */
  export type StreamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
  }

  /**
   * Stream upsert
   */
  export type StreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The filter to search for the Stream to update in case it exists.
     */
    where: StreamWhereUniqueInput
    /**
     * In case the Stream found by the `where` argument doesn't exist, create a new Stream with this data.
     */
    create: XOR<StreamCreateInput, StreamUncheckedCreateInput>
    /**
     * In case the Stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
  }

  /**
   * Stream delete
   */
  export type StreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter which Stream to delete.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream deleteMany
   */
  export type StreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to delete.
     */
    limit?: number
  }

  /**
   * Stream.subscriptions
   */
  export type Stream$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    where?: StreamSubscriptionWhereInput
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    cursor?: StreamSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamSubscriptionScalarFieldEnum | StreamSubscriptionScalarFieldEnum[]
  }

  /**
   * Stream without action
   */
  export type StreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
  }


  /**
   * Model StreamSubscription
   */

  export type AggregateStreamSubscription = {
    _count: StreamSubscriptionCountAggregateOutputType | null
    _avg: StreamSubscriptionAvgAggregateOutputType | null
    _sum: StreamSubscriptionSumAggregateOutputType | null
    _min: StreamSubscriptionMinAggregateOutputType | null
    _max: StreamSubscriptionMaxAggregateOutputType | null
  }

  export type StreamSubscriptionAvgAggregateOutputType = {
    price: number | null
    selectedDays: number | null
  }

  export type StreamSubscriptionSumAggregateOutputType = {
    price: number | null
    selectedDays: number[]
  }

  export type StreamSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    streamId: string | null
    price: number | null
    startDate: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    streamId: string | null
    price: number | null
    startDate: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreamSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    streamId: number
    price: number
    selectedDays: number
    startDate: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreamSubscriptionAvgAggregateInputType = {
    price?: true
    selectedDays?: true
  }

  export type StreamSubscriptionSumAggregateInputType = {
    price?: true
    selectedDays?: true
  }

  export type StreamSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
    price?: true
    startDate?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
    price?: true
    startDate?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreamSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    streamId?: true
    price?: true
    selectedDays?: true
    startDate?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreamSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSubscription to aggregate.
     */
    where?: StreamSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSubscriptions to fetch.
     */
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamSubscriptions
    **/
    _count?: true | StreamSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamSubscriptionMaxAggregateInputType
  }

  export type GetStreamSubscriptionAggregateType<T extends StreamSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamSubscription[P]>
      : GetScalarType<T[P], AggregateStreamSubscription[P]>
  }




  export type StreamSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamSubscriptionWhereInput
    orderBy?: StreamSubscriptionOrderByWithAggregationInput | StreamSubscriptionOrderByWithAggregationInput[]
    by: StreamSubscriptionScalarFieldEnum[] | StreamSubscriptionScalarFieldEnum
    having?: StreamSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamSubscriptionCountAggregateInputType | true
    _avg?: StreamSubscriptionAvgAggregateInputType
    _sum?: StreamSubscriptionSumAggregateInputType
    _min?: StreamSubscriptionMinAggregateInputType
    _max?: StreamSubscriptionMaxAggregateInputType
  }

  export type StreamSubscriptionGroupByOutputType = {
    id: string
    userId: string
    streamId: string
    price: number
    selectedDays: number[]
    startDate: Date
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StreamSubscriptionCountAggregateOutputType | null
    _avg: StreamSubscriptionAvgAggregateOutputType | null
    _sum: StreamSubscriptionSumAggregateOutputType | null
    _min: StreamSubscriptionMinAggregateOutputType | null
    _max: StreamSubscriptionMaxAggregateOutputType | null
  }

  type GetStreamSubscriptionGroupByPayload<T extends StreamSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], StreamSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type StreamSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    price?: boolean
    selectedDays?: boolean
    startDate?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSubscription"]>

  export type StreamSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    price?: boolean
    selectedDays?: boolean
    startDate?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSubscription"]>

  export type StreamSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    streamId?: boolean
    price?: boolean
    selectedDays?: boolean
    startDate?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamSubscription"]>

  export type StreamSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    streamId?: boolean
    price?: boolean
    selectedDays?: boolean
    startDate?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreamSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "streamId" | "price" | "selectedDays" | "startDate" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["streamSubscription"]>
  export type StreamSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }
  export type StreamSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }
  export type StreamSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stream?: boolean | StreamDefaultArgs<ExtArgs>
  }

  export type $StreamSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      stream: Prisma.$StreamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      streamId: string
      price: number
      selectedDays: number[]
      startDate: Date
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streamSubscription"]>
    composites: {}
  }

  type StreamSubscriptionGetPayload<S extends boolean | null | undefined | StreamSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$StreamSubscriptionPayload, S>

  type StreamSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamSubscriptionCountAggregateInputType | true
    }

  export interface StreamSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamSubscription'], meta: { name: 'StreamSubscription' } }
    /**
     * Find zero or one StreamSubscription that matches the filter.
     * @param {StreamSubscriptionFindUniqueArgs} args - Arguments to find a StreamSubscription
     * @example
     * // Get one StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamSubscriptionFindUniqueArgs>(args: SelectSubset<T, StreamSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a StreamSubscription
     * @example
     * // Get one StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionFindFirstArgs} args - Arguments to find a StreamSubscription
     * @example
     * // Get one StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamSubscriptionFindFirstArgs>(args?: SelectSubset<T, StreamSubscriptionFindFirstArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionFindFirstOrThrowArgs} args - Arguments to find a StreamSubscription
     * @example
     * // Get one StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamSubscriptions
     * const streamSubscriptions = await prisma.streamSubscription.findMany()
     * 
     * // Get first 10 StreamSubscriptions
     * const streamSubscriptions = await prisma.streamSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamSubscriptionWithIdOnly = await prisma.streamSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamSubscriptionFindManyArgs>(args?: SelectSubset<T, StreamSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamSubscription.
     * @param {StreamSubscriptionCreateArgs} args - Arguments to create a StreamSubscription.
     * @example
     * // Create one StreamSubscription
     * const StreamSubscription = await prisma.streamSubscription.create({
     *   data: {
     *     // ... data to create a StreamSubscription
     *   }
     * })
     * 
     */
    create<T extends StreamSubscriptionCreateArgs>(args: SelectSubset<T, StreamSubscriptionCreateArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamSubscriptions.
     * @param {StreamSubscriptionCreateManyArgs} args - Arguments to create many StreamSubscriptions.
     * @example
     * // Create many StreamSubscriptions
     * const streamSubscription = await prisma.streamSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamSubscriptionCreateManyArgs>(args?: SelectSubset<T, StreamSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamSubscriptions and returns the data saved in the database.
     * @param {StreamSubscriptionCreateManyAndReturnArgs} args - Arguments to create many StreamSubscriptions.
     * @example
     * // Create many StreamSubscriptions
     * const streamSubscription = await prisma.streamSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamSubscriptions and only return the `id`
     * const streamSubscriptionWithIdOnly = await prisma.streamSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamSubscription.
     * @param {StreamSubscriptionDeleteArgs} args - Arguments to delete one StreamSubscription.
     * @example
     * // Delete one StreamSubscription
     * const StreamSubscription = await prisma.streamSubscription.delete({
     *   where: {
     *     // ... filter to delete one StreamSubscription
     *   }
     * })
     * 
     */
    delete<T extends StreamSubscriptionDeleteArgs>(args: SelectSubset<T, StreamSubscriptionDeleteArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamSubscription.
     * @param {StreamSubscriptionUpdateArgs} args - Arguments to update one StreamSubscription.
     * @example
     * // Update one StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamSubscriptionUpdateArgs>(args: SelectSubset<T, StreamSubscriptionUpdateArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamSubscriptions.
     * @param {StreamSubscriptionDeleteManyArgs} args - Arguments to filter StreamSubscriptions to delete.
     * @example
     * // Delete a few StreamSubscriptions
     * const { count } = await prisma.streamSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamSubscriptionDeleteManyArgs>(args?: SelectSubset<T, StreamSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamSubscriptions
     * const streamSubscription = await prisma.streamSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamSubscriptionUpdateManyArgs>(args: SelectSubset<T, StreamSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamSubscriptions and returns the data updated in the database.
     * @param {StreamSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many StreamSubscriptions.
     * @example
     * // Update many StreamSubscriptions
     * const streamSubscription = await prisma.streamSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamSubscriptions and only return the `id`
     * const streamSubscriptionWithIdOnly = await prisma.streamSubscription.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends StreamSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamSubscription.
     * @param {StreamSubscriptionUpsertArgs} args - Arguments to update or create a StreamSubscription.
     * @example
     * // Update or create a StreamSubscription
     * const streamSubscription = await prisma.streamSubscription.upsert({
     *   create: {
     *     // ... data to create a StreamSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamSubscription we want to update
     *   }
     * })
     */
    upsert<T extends StreamSubscriptionUpsertArgs>(args: SelectSubset<T, StreamSubscriptionUpsertArgs<ExtArgs>>): Prisma__StreamSubscriptionClient<$Result.GetResult<Prisma.$StreamSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionCountArgs} args - Arguments to filter StreamSubscriptions to count.
     * @example
     * // Count the number of StreamSubscriptions
     * const count = await prisma.streamSubscription.count({
     *   where: {
     *     // ... the filter for the StreamSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends StreamSubscriptionCountArgs>(
      args?: Subset<T, StreamSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamSubscriptionAggregateArgs>(args: Subset<T, StreamSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetStreamSubscriptionAggregateType<T>>

    /**
     * Group by StreamSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends StreamSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: StreamSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamSubscription model
   */
  readonly fields: StreamSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stream<T extends StreamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamDefaultArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StreamSubscription model
   */
  interface StreamSubscriptionFieldRefs {
    readonly id: FieldRef<"StreamSubscription", 'String'>
    readonly userId: FieldRef<"StreamSubscription", 'String'>
    readonly streamId: FieldRef<"StreamSubscription", 'String'>
    readonly price: FieldRef<"StreamSubscription", 'Float'>
    readonly selectedDays: FieldRef<"StreamSubscription", 'Int[]'>
    readonly startDate: FieldRef<"StreamSubscription", 'DateTime'>
    readonly cancelledAt: FieldRef<"StreamSubscription", 'DateTime'>
    readonly createdAt: FieldRef<"StreamSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"StreamSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreamSubscription findUnique
   */
  export type StreamSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSubscription to fetch.
     */
    where: StreamSubscriptionWhereUniqueInput
  }

  /**
   * StreamSubscription findUniqueOrThrow
   */
  export type StreamSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSubscription to fetch.
     */
    where: StreamSubscriptionWhereUniqueInput
  }

  /**
   * StreamSubscription findFirst
   */
  export type StreamSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSubscription to fetch.
     */
    where?: StreamSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSubscriptions to fetch.
     */
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSubscriptions.
     */
    cursor?: StreamSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSubscriptions.
     */
    distinct?: StreamSubscriptionScalarFieldEnum | StreamSubscriptionScalarFieldEnum[]
  }

  /**
   * StreamSubscription findFirstOrThrow
   */
  export type StreamSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSubscription to fetch.
     */
    where?: StreamSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSubscriptions to fetch.
     */
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamSubscriptions.
     */
    cursor?: StreamSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSubscriptions.
     */
    distinct?: StreamSubscriptionScalarFieldEnum | StreamSubscriptionScalarFieldEnum[]
  }

  /**
   * StreamSubscription findMany
   */
  export type StreamSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which StreamSubscriptions to fetch.
     */
    where?: StreamSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamSubscriptions to fetch.
     */
    orderBy?: StreamSubscriptionOrderByWithRelationInput | StreamSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamSubscriptions.
     */
    cursor?: StreamSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamSubscriptions.
     */
    distinct?: StreamSubscriptionScalarFieldEnum | StreamSubscriptionScalarFieldEnum[]
  }

  /**
   * StreamSubscription create
   */
  export type StreamSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamSubscription.
     */
    data: XOR<StreamSubscriptionCreateInput, StreamSubscriptionUncheckedCreateInput>
  }

  /**
   * StreamSubscription createMany
   */
  export type StreamSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamSubscriptions.
     */
    data: StreamSubscriptionCreateManyInput | StreamSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamSubscription createManyAndReturn
   */
  export type StreamSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many StreamSubscriptions.
     */
    data: StreamSubscriptionCreateManyInput | StreamSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSubscription update
   */
  export type StreamSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamSubscription.
     */
    data: XOR<StreamSubscriptionUpdateInput, StreamSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which StreamSubscription to update.
     */
    where: StreamSubscriptionWhereUniqueInput
  }

  /**
   * StreamSubscription updateMany
   */
  export type StreamSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamSubscriptions.
     */
    data: XOR<StreamSubscriptionUpdateManyMutationInput, StreamSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which StreamSubscriptions to update
     */
    where?: StreamSubscriptionWhereInput
    /**
     * Limit how many StreamSubscriptions to update.
     */
    limit?: number
  }

  /**
   * StreamSubscription updateManyAndReturn
   */
  export type StreamSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update StreamSubscriptions.
     */
    data: XOR<StreamSubscriptionUpdateManyMutationInput, StreamSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which StreamSubscriptions to update
     */
    where?: StreamSubscriptionWhereInput
    /**
     * Limit how many StreamSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamSubscription upsert
   */
  export type StreamSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamSubscription to update in case it exists.
     */
    where: StreamSubscriptionWhereUniqueInput
    /**
     * In case the StreamSubscription found by the `where` argument doesn't exist, create a new StreamSubscription with this data.
     */
    create: XOR<StreamSubscriptionCreateInput, StreamSubscriptionUncheckedCreateInput>
    /**
     * In case the StreamSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamSubscriptionUpdateInput, StreamSubscriptionUncheckedUpdateInput>
  }

  /**
   * StreamSubscription delete
   */
  export type StreamSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which StreamSubscription to delete.
     */
    where: StreamSubscriptionWhereUniqueInput
  }

  /**
   * StreamSubscription deleteMany
   */
  export type StreamSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamSubscriptions to delete
     */
    where?: StreamSubscriptionWhereInput
    /**
     * Limit how many StreamSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * StreamSubscription without action
   */
  export type StreamSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamSubscription
     */
    select?: StreamSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamSubscription
     */
    omit?: StreamSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TestScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    status: 'status',
    role: 'role',
    failedLoginAttempts: 'failedLoginAttempts',
    lastLoginAttempt: 'lastLoginAttempt',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordTokenExpiry: 'resetPasswordTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    publicId: 'publicId',
    userId: 'userId',
    type: 'type',
    entityType: 'entityType',
    entityId: 'entityId',
    description: 'description',
    systemLog: 'systemLog',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    excerpt: 'excerpt',
    description: 'description',
    marketingTitle: 'marketingTitle',
    bulletPoints: 'bulletPoints',
    imageUrl: 'imageUrl',
    tags: 'tags',
    status: 'status',
    availability: 'availability',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const StreamSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    streamId: 'streamId',
    price: 'price',
    selectedDays: 'selectedDays',
    startDate: 'startDate',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreamSubscriptionScalarFieldEnum = (typeof StreamSubscriptionScalarFieldEnum)[keyof typeof StreamSubscriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ActivityLogActionType'
   */
  export type EnumActivityLogActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogActionType'>
    


  /**
   * Reference to a field of type 'ActivityLogActionType[]'
   */
  export type ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogActionType[]'>
    


  /**
   * Reference to a field of type 'ActivityLogEntityType'
   */
  export type EnumActivityLogEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogEntityType'>
    


  /**
   * Reference to a field of type 'ActivityLogEntityType[]'
   */
  export type ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLogEntityType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StreamTag[]'
   */
  export type ListEnumStreamTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamTag[]'>
    


  /**
   * Reference to a field of type 'StreamTag'
   */
  export type EnumStreamTagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamTag'>
    


  /**
   * Reference to a field of type 'StreamStatus'
   */
  export type EnumStreamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamStatus'>
    


  /**
   * Reference to a field of type 'StreamStatus[]'
   */
  export type ListEnumStreamStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    text?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    text?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    text?: StringWithAggregatesFilter<"Test"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    failedLoginAttempts?: IntFilter<"User"> | number
    lastLoginAttempt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpiry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    subscriptions?: StreamSubscriptionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    failedLoginAttempts?: SortOrder
    lastLoginAttempt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    subscriptions?: StreamSubscriptionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    failedLoginAttempts?: IntFilter<"User"> | number
    lastLoginAttempt?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordTokenExpiry?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    subscriptions?: StreamSubscriptionListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    failedLoginAttempts?: SortOrder
    lastLoginAttempt?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    failedLoginAttempts?: IntWithAggregatesFilter<"User"> | number
    lastLoginAttempt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordTokenExpiry?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    publicId?: IntFilter<"ActivityLog"> | number
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    type?: EnumActivityLogActionTypeFilter<"ActivityLog"> | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFilter<"ActivityLog"> | $Enums.ActivityLogEntityType
    entityId?: StringFilter<"ActivityLog"> | string
    description?: StringNullableFilter<"ActivityLog"> | string | null
    systemLog?: BoolFilter<"ActivityLog"> | boolean
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    publicId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrderInput | SortOrder
    systemLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicId?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    type?: EnumActivityLogActionTypeFilter<"ActivityLog"> | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFilter<"ActivityLog"> | $Enums.ActivityLogEntityType
    entityId?: StringFilter<"ActivityLog"> | string
    description?: StringNullableFilter<"ActivityLog"> | string | null
    systemLog?: BoolFilter<"ActivityLog"> | boolean
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "publicId">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    publicId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrderInput | SortOrder
    systemLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    publicId?: IntWithAggregatesFilter<"ActivityLog"> | number
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    type?: EnumActivityLogActionTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityLogEntityType
    entityId?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    systemLog?: BoolWithAggregatesFilter<"ActivityLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type StreamWhereInput = {
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    id?: StringFilter<"Stream"> | string
    name?: StringFilter<"Stream"> | string
    price?: FloatFilter<"Stream"> | number
    excerpt?: StringFilter<"Stream"> | string
    description?: StringNullableFilter<"Stream"> | string | null
    marketingTitle?: StringNullableFilter<"Stream"> | string | null
    bulletPoints?: StringNullableListFilter<"Stream">
    imageUrl?: StringNullableFilter<"Stream"> | string | null
    tags?: EnumStreamTagNullableListFilter<"Stream">
    status?: EnumStreamStatusFilter<"Stream"> | $Enums.StreamStatus
    availability?: IntNullableListFilter<"Stream">
    createdAt?: DateTimeFilter<"Stream"> | Date | string
    updatedAt?: DateTimeFilter<"Stream"> | Date | string
    subscriptions?: StreamSubscriptionListRelationFilter
  }

  export type StreamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    excerpt?: SortOrder
    description?: SortOrderInput | SortOrder
    marketingTitle?: SortOrderInput | SortOrder
    bulletPoints?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: StreamSubscriptionOrderByRelationAggregateInput
  }

  export type StreamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    name?: StringFilter<"Stream"> | string
    price?: FloatFilter<"Stream"> | number
    excerpt?: StringFilter<"Stream"> | string
    description?: StringNullableFilter<"Stream"> | string | null
    marketingTitle?: StringNullableFilter<"Stream"> | string | null
    bulletPoints?: StringNullableListFilter<"Stream">
    imageUrl?: StringNullableFilter<"Stream"> | string | null
    tags?: EnumStreamTagNullableListFilter<"Stream">
    status?: EnumStreamStatusFilter<"Stream"> | $Enums.StreamStatus
    availability?: IntNullableListFilter<"Stream">
    createdAt?: DateTimeFilter<"Stream"> | Date | string
    updatedAt?: DateTimeFilter<"Stream"> | Date | string
    subscriptions?: StreamSubscriptionListRelationFilter
  }, "id">

  export type StreamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    excerpt?: SortOrder
    description?: SortOrderInput | SortOrder
    marketingTitle?: SortOrderInput | SortOrder
    bulletPoints?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tags?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreamCountOrderByAggregateInput
    _avg?: StreamAvgOrderByAggregateInput
    _max?: StreamMaxOrderByAggregateInput
    _min?: StreamMinOrderByAggregateInput
    _sum?: StreamSumOrderByAggregateInput
  }

  export type StreamScalarWhereWithAggregatesInput = {
    AND?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    OR?: StreamScalarWhereWithAggregatesInput[]
    NOT?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stream"> | string
    name?: StringWithAggregatesFilter<"Stream"> | string
    price?: FloatWithAggregatesFilter<"Stream"> | number
    excerpt?: StringWithAggregatesFilter<"Stream"> | string
    description?: StringNullableWithAggregatesFilter<"Stream"> | string | null
    marketingTitle?: StringNullableWithAggregatesFilter<"Stream"> | string | null
    bulletPoints?: StringNullableListFilter<"Stream">
    imageUrl?: StringNullableWithAggregatesFilter<"Stream"> | string | null
    tags?: EnumStreamTagNullableListFilter<"Stream">
    status?: EnumStreamStatusWithAggregatesFilter<"Stream"> | $Enums.StreamStatus
    availability?: IntNullableListFilter<"Stream">
    createdAt?: DateTimeWithAggregatesFilter<"Stream"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stream"> | Date | string
  }

  export type StreamSubscriptionWhereInput = {
    AND?: StreamSubscriptionWhereInput | StreamSubscriptionWhereInput[]
    OR?: StreamSubscriptionWhereInput[]
    NOT?: StreamSubscriptionWhereInput | StreamSubscriptionWhereInput[]
    id?: StringFilter<"StreamSubscription"> | string
    userId?: StringFilter<"StreamSubscription"> | string
    streamId?: StringFilter<"StreamSubscription"> | string
    price?: FloatFilter<"StreamSubscription"> | number
    selectedDays?: IntNullableListFilter<"StreamSubscription">
    startDate?: DateTimeFilter<"StreamSubscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"StreamSubscription"> | Date | string | null
    createdAt?: DateTimeFilter<"StreamSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
  }

  export type StreamSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    price?: SortOrder
    selectedDays?: SortOrder
    startDate?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    stream?: StreamOrderByWithRelationInput
  }

  export type StreamSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamSubscriptionWhereInput | StreamSubscriptionWhereInput[]
    OR?: StreamSubscriptionWhereInput[]
    NOT?: StreamSubscriptionWhereInput | StreamSubscriptionWhereInput[]
    userId?: StringFilter<"StreamSubscription"> | string
    streamId?: StringFilter<"StreamSubscription"> | string
    price?: FloatFilter<"StreamSubscription"> | number
    selectedDays?: IntNullableListFilter<"StreamSubscription">
    startDate?: DateTimeFilter<"StreamSubscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"StreamSubscription"> | Date | string | null
    createdAt?: DateTimeFilter<"StreamSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
  }, "id">

  export type StreamSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    price?: SortOrder
    selectedDays?: SortOrder
    startDate?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreamSubscriptionCountOrderByAggregateInput
    _avg?: StreamSubscriptionAvgOrderByAggregateInput
    _max?: StreamSubscriptionMaxOrderByAggregateInput
    _min?: StreamSubscriptionMinOrderByAggregateInput
    _sum?: StreamSubscriptionSumOrderByAggregateInput
  }

  export type StreamSubscriptionScalarWhereWithAggregatesInput = {
    AND?: StreamSubscriptionScalarWhereWithAggregatesInput | StreamSubscriptionScalarWhereWithAggregatesInput[]
    OR?: StreamSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: StreamSubscriptionScalarWhereWithAggregatesInput | StreamSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamSubscription"> | string
    userId?: StringWithAggregatesFilter<"StreamSubscription"> | string
    streamId?: StringWithAggregatesFilter<"StreamSubscription"> | string
    price?: FloatWithAggregatesFilter<"StreamSubscription"> | number
    selectedDays?: IntNullableListFilter<"StreamSubscription">
    startDate?: DateTimeWithAggregatesFilter<"StreamSubscription"> | Date | string
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"StreamSubscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StreamSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreamSubscription"> | Date | string
  }

  export type TestCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    token: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogCreateInput = {
    id?: string
    publicId?: number
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    publicId?: number
    userId?: string | null
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    publicId?: number
    userId?: string | null
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamCreateInput = {
    id?: string
    name: string
    price: number
    excerpt: string
    description?: string | null
    marketingTitle?: string | null
    bulletPoints?: StreamCreatebulletPointsInput | string[]
    imageUrl?: string | null
    tags?: StreamCreatetagsInput | $Enums.StreamTag[]
    status?: $Enums.StreamStatus
    availability?: StreamCreateavailabilityInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: StreamSubscriptionCreateNestedManyWithoutStreamInput
  }

  export type StreamUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    excerpt: string
    description?: string | null
    marketingTitle?: string | null
    bulletPoints?: StreamCreatebulletPointsInput | string[]
    imageUrl?: string | null
    tags?: StreamCreatetagsInput | $Enums.StreamTag[]
    status?: $Enums.StreamStatus
    availability?: StreamCreateavailabilityInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: StreamSubscriptionUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: StreamSubscriptionUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: StreamSubscriptionUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamCreateManyInput = {
    id?: string
    name: string
    price: number
    excerpt: string
    description?: string | null
    marketingTitle?: string | null
    bulletPoints?: StreamCreatebulletPointsInput | string[]
    imageUrl?: string | null
    tags?: StreamCreatetagsInput | $Enums.StreamTag[]
    status?: $Enums.StreamStatus
    availability?: StreamCreateavailabilityInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionCreateInput = {
    id?: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    stream: StreamCreateNestedOneWithoutSubscriptionsInput
  }

  export type StreamSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    streamId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    stream?: StreamUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type StreamSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionCreateManyInput = {
    id?: string
    userId: string
    streamId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type StreamSubscriptionListRelationFilter = {
    every?: StreamSubscriptionWhereInput
    some?: StreamSubscriptionWhereInput
    none?: StreamSubscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    failedLoginAttempts?: SortOrder
    lastLoginAttempt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    failedLoginAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    failedLoginAttempts?: SortOrder
    lastLoginAttempt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    failedLoginAttempts?: SortOrder
    lastLoginAttempt?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    failedLoginAttempts?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EnumActivityLogActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogActionType | EnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogActionTypeFilter<$PrismaModel> | $Enums.ActivityLogActionType
  }

  export type EnumActivityLogEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogEntityType | EnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel> | $Enums.ActivityLogEntityType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    systemLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    publicId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    systemLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    publicId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    systemLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    publicId?: SortOrder
  }

  export type EnumActivityLogActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogActionType | EnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogActionTypeFilter<$PrismaModel>
  }

  export type EnumActivityLogEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogEntityType | EnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStreamTagNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamTag[] | ListEnumStreamTagFieldRefInput<$PrismaModel> | null
    has?: $Enums.StreamTag | EnumStreamTagFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.StreamTag[] | ListEnumStreamTagFieldRefInput<$PrismaModel>
    hasSome?: $Enums.StreamTag[] | ListEnumStreamTagFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumStreamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamStatus | EnumStreamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamStatusFilter<$PrismaModel> | $Enums.StreamStatus
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StreamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    marketingTitle?: SortOrder
    bulletPoints?: SortOrder
    imageUrl?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamAvgOrderByAggregateInput = {
    price?: SortOrder
    availability?: SortOrder
  }

  export type StreamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    marketingTitle?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    excerpt?: SortOrder
    description?: SortOrder
    marketingTitle?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSumOrderByAggregateInput = {
    price?: SortOrder
    availability?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumStreamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamStatus | EnumStreamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamStatusFilter<$PrismaModel>
    _max?: NestedEnumStreamStatusFilter<$PrismaModel>
  }

  export type StreamScalarRelationFilter = {
    is?: StreamWhereInput
    isNot?: StreamWhereInput
  }

  export type StreamSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    price?: SortOrder
    selectedDays?: SortOrder
    startDate?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSubscriptionAvgOrderByAggregateInput = {
    price?: SortOrder
    selectedDays?: SortOrder
  }

  export type StreamSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    streamId?: SortOrder
    price?: SortOrder
    startDate?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreamSubscriptionSumOrderByAggregateInput = {
    price?: SortOrder
    selectedDays?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StreamSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput> | StreamSubscriptionCreateWithoutUserInput[] | StreamSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutUserInput | StreamSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: StreamSubscriptionCreateManyUserInputEnvelope
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StreamSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput> | StreamSubscriptionCreateWithoutUserInput[] | StreamSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutUserInput | StreamSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: StreamSubscriptionCreateManyUserInputEnvelope
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type StreamSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput> | StreamSubscriptionCreateWithoutUserInput[] | StreamSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutUserInput | StreamSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: StreamSubscriptionUpsertWithWhereUniqueWithoutUserInput | StreamSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSubscriptionCreateManyUserInputEnvelope
    set?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    disconnect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    delete?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    update?: StreamSubscriptionUpdateWithWhereUniqueWithoutUserInput | StreamSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSubscriptionUpdateManyWithWhereWithoutUserInput | StreamSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type StreamSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput> | StreamSubscriptionCreateWithoutUserInput[] | StreamSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutUserInput | StreamSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: StreamSubscriptionUpsertWithWhereUniqueWithoutUserInput | StreamSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamSubscriptionCreateManyUserInputEnvelope
    set?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    disconnect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    delete?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    update?: StreamSubscriptionUpdateWithWhereUniqueWithoutUserInput | StreamSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamSubscriptionUpdateManyWithWhereWithoutUserInput | StreamSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityLogActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLogActionType
  }

  export type EnumActivityLogEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLogEntityType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type StreamCreatebulletPointsInput = {
    set: string[]
  }

  export type StreamCreatetagsInput = {
    set: $Enums.StreamTag[]
  }

  export type StreamCreateavailabilityInput = {
    set: number[]
  }

  export type StreamSubscriptionCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput> | StreamSubscriptionCreateWithoutStreamInput[] | StreamSubscriptionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutStreamInput | StreamSubscriptionCreateOrConnectWithoutStreamInput[]
    createMany?: StreamSubscriptionCreateManyStreamInputEnvelope
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
  }

  export type StreamSubscriptionUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput> | StreamSubscriptionCreateWithoutStreamInput[] | StreamSubscriptionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutStreamInput | StreamSubscriptionCreateOrConnectWithoutStreamInput[]
    createMany?: StreamSubscriptionCreateManyStreamInputEnvelope
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StreamUpdatebulletPointsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StreamUpdatetagsInput = {
    set?: $Enums.StreamTag[]
    push?: $Enums.StreamTag | $Enums.StreamTag[]
  }

  export type EnumStreamStatusFieldUpdateOperationsInput = {
    set?: $Enums.StreamStatus
  }

  export type StreamUpdateavailabilityInput = {
    set?: number[]
    push?: number | number[]
  }

  export type StreamSubscriptionUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput> | StreamSubscriptionCreateWithoutStreamInput[] | StreamSubscriptionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutStreamInput | StreamSubscriptionCreateOrConnectWithoutStreamInput[]
    upsert?: StreamSubscriptionUpsertWithWhereUniqueWithoutStreamInput | StreamSubscriptionUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamSubscriptionCreateManyStreamInputEnvelope
    set?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    disconnect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    delete?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    update?: StreamSubscriptionUpdateWithWhereUniqueWithoutStreamInput | StreamSubscriptionUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamSubscriptionUpdateManyWithWhereWithoutStreamInput | StreamSubscriptionUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
  }

  export type StreamSubscriptionUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput> | StreamSubscriptionCreateWithoutStreamInput[] | StreamSubscriptionUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamSubscriptionCreateOrConnectWithoutStreamInput | StreamSubscriptionCreateOrConnectWithoutStreamInput[]
    upsert?: StreamSubscriptionUpsertWithWhereUniqueWithoutStreamInput | StreamSubscriptionUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamSubscriptionCreateManyStreamInputEnvelope
    set?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    disconnect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    delete?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    connect?: StreamSubscriptionWhereUniqueInput | StreamSubscriptionWhereUniqueInput[]
    update?: StreamSubscriptionUpdateWithWhereUniqueWithoutStreamInput | StreamSubscriptionUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamSubscriptionUpdateManyWithWhereWithoutStreamInput | StreamSubscriptionUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
  }

  export type StreamSubscriptionCreateselectedDaysInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type StreamCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<StreamCreateWithoutSubscriptionsInput, StreamUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutSubscriptionsInput
    connect?: StreamWhereUniqueInput
  }

  export type StreamSubscriptionUpdateselectedDaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type StreamUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<StreamCreateWithoutSubscriptionsInput, StreamUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutSubscriptionsInput
    upsert?: StreamUpsertWithoutSubscriptionsInput
    connect?: StreamWhereUniqueInput
    update?: XOR<XOR<StreamUpdateToOneWithWhereWithoutSubscriptionsInput, StreamUpdateWithoutSubscriptionsInput>, StreamUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityLogActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogActionType | EnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogActionTypeFilter<$PrismaModel> | $Enums.ActivityLogActionType
  }

  export type NestedEnumActivityLogEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogEntityType | EnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel> | $Enums.ActivityLogEntityType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumActivityLogActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogActionType | EnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogActionType[] | ListEnumActivityLogActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogActionTypeFilter<$PrismaModel>
  }

  export type NestedEnumActivityLogEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLogEntityType | EnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLogEntityType[] | ListEnumActivityLogEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLogEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLogEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityLogEntityTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStreamStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamStatus | EnumStreamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamStatusFilter<$PrismaModel> | $Enums.StreamStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumStreamStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamStatus | EnumStreamStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamStatus[] | ListEnumStreamStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreamStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamStatusFilter<$PrismaModel>
    _max?: NestedEnumStreamStatusFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    publicId?: number
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    publicId?: number
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamSubscriptionCreateWithoutUserInput = {
    id?: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stream: StreamCreateNestedOneWithoutSubscriptionsInput
  }

  export type StreamSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    streamId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionCreateOrConnectWithoutUserInput = {
    where: StreamSubscriptionWhereUniqueInput
    create: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type StreamSubscriptionCreateManyUserInputEnvelope = {
    data: StreamSubscriptionCreateManyUserInput | StreamSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    publicId?: IntFilter<"ActivityLog"> | number
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    type?: EnumActivityLogActionTypeFilter<"ActivityLog"> | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFilter<"ActivityLog"> | $Enums.ActivityLogEntityType
    entityId?: StringFilter<"ActivityLog"> | string
    description?: StringNullableFilter<"ActivityLog"> | string | null
    systemLog?: BoolFilter<"ActivityLog"> | boolean
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    updatedAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type StreamSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamSubscriptionWhereUniqueInput
    update: XOR<StreamSubscriptionUpdateWithoutUserInput, StreamSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<StreamSubscriptionCreateWithoutUserInput, StreamSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type StreamSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamSubscriptionWhereUniqueInput
    data: XOR<StreamSubscriptionUpdateWithoutUserInput, StreamSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type StreamSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: StreamSubscriptionScalarWhereInput
    data: XOR<StreamSubscriptionUpdateManyMutationInput, StreamSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamSubscriptionScalarWhereInput = {
    AND?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
    OR?: StreamSubscriptionScalarWhereInput[]
    NOT?: StreamSubscriptionScalarWhereInput | StreamSubscriptionScalarWhereInput[]
    id?: StringFilter<"StreamSubscription"> | string
    userId?: StringFilter<"StreamSubscription"> | string
    streamId?: StringFilter<"StreamSubscription"> | string
    price?: FloatFilter<"StreamSubscription"> | number
    selectedDays?: IntNullableListFilter<"StreamSubscription">
    startDate?: DateTimeFilter<"StreamSubscription"> | Date | string
    cancelledAt?: DateTimeNullableFilter<"StreamSubscription"> | Date | string | null
    createdAt?: DateTimeFilter<"StreamSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"StreamSubscription"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: StreamSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: StreamSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamSubscriptionCreateWithoutStreamInput = {
    id?: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type StreamSubscriptionUncheckedCreateWithoutStreamInput = {
    id?: string
    userId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionCreateOrConnectWithoutStreamInput = {
    where: StreamSubscriptionWhereUniqueInput
    create: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput>
  }

  export type StreamSubscriptionCreateManyStreamInputEnvelope = {
    data: StreamSubscriptionCreateManyStreamInput | StreamSubscriptionCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type StreamSubscriptionUpsertWithWhereUniqueWithoutStreamInput = {
    where: StreamSubscriptionWhereUniqueInput
    update: XOR<StreamSubscriptionUpdateWithoutStreamInput, StreamSubscriptionUncheckedUpdateWithoutStreamInput>
    create: XOR<StreamSubscriptionCreateWithoutStreamInput, StreamSubscriptionUncheckedCreateWithoutStreamInput>
  }

  export type StreamSubscriptionUpdateWithWhereUniqueWithoutStreamInput = {
    where: StreamSubscriptionWhereUniqueInput
    data: XOR<StreamSubscriptionUpdateWithoutStreamInput, StreamSubscriptionUncheckedUpdateWithoutStreamInput>
  }

  export type StreamSubscriptionUpdateManyWithWhereWithoutStreamInput = {
    where: StreamSubscriptionScalarWhereInput
    data: XOR<StreamSubscriptionUpdateManyMutationInput, StreamSubscriptionUncheckedUpdateManyWithoutStreamInput>
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    failedLoginAttempts?: number
    lastLoginAttempt?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordTokenExpiry?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type StreamCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    excerpt: string
    description?: string | null
    marketingTitle?: string | null
    bulletPoints?: StreamCreatebulletPointsInput | string[]
    imageUrl?: string | null
    tags?: StreamCreatetagsInput | $Enums.StreamTag[]
    status?: $Enums.StreamStatus
    availability?: StreamCreateavailabilityInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    excerpt: string
    description?: string | null
    marketingTitle?: string | null
    bulletPoints?: StreamCreatebulletPointsInput | string[]
    imageUrl?: string | null
    tags?: StreamCreatetagsInput | $Enums.StreamTag[]
    status?: $Enums.StreamStatus
    availability?: StreamCreateavailabilityInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamCreateOrConnectWithoutSubscriptionsInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutSubscriptionsInput, StreamUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    failedLoginAttempts?: IntFieldUpdateOperationsInput | number
    lastLoginAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordTokenExpiry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamUpsertWithoutSubscriptionsInput = {
    update: XOR<StreamUpdateWithoutSubscriptionsInput, StreamUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<StreamCreateWithoutSubscriptionsInput, StreamUncheckedCreateWithoutSubscriptionsInput>
    where?: StreamWhereInput
  }

  export type StreamUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: StreamWhereInput
    data: XOR<StreamUpdateWithoutSubscriptionsInput, StreamUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type StreamUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    excerpt?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    marketingTitle?: NullableStringFieldUpdateOperationsInput | string | null
    bulletPoints?: StreamUpdatebulletPointsInput | string[]
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: StreamUpdatetagsInput | $Enums.StreamTag[]
    status?: EnumStreamStatusFieldUpdateOperationsInput | $Enums.StreamStatus
    availability?: StreamUpdateavailabilityInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    publicId?: number
    type: $Enums.ActivityLogActionType
    entityType: $Enums.ActivityLogEntityType
    entityId: string
    description?: string | null
    systemLog?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionCreateManyUserInput = {
    id?: string
    streamId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicId?: IntFieldUpdateOperationsInput | number
    type?: EnumActivityLogActionTypeFieldUpdateOperationsInput | $Enums.ActivityLogActionType
    entityType?: EnumActivityLogEntityTypeFieldUpdateOperationsInput | $Enums.ActivityLogEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    systemLog?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stream?: StreamUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type StreamSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionCreateManyStreamInput = {
    id?: string
    userId: string
    price: number
    selectedDays?: StreamSubscriptionCreateselectedDaysInput | number[]
    startDate: Date | string
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreamSubscriptionUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type StreamSubscriptionUncheckedUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamSubscriptionUncheckedUpdateManyWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    selectedDays?: StreamSubscriptionUpdateselectedDaysInput | number[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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