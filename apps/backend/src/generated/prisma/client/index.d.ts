
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model UsersTeams
 * 
 */
export type UsersTeams = $Result.DefaultSelection<Prisma.$UsersTeamsPayload>
/**
 * Model Keywords
 * 
 */
export type Keywords = $Result.DefaultSelection<Prisma.$KeywordsPayload>
/**
 * Model TeamsKeywords
 * 
 */
export type TeamsKeywords = $Result.DefaultSelection<Prisma.$TeamsKeywordsPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model TeamsPosts
 * 
 */
export type TeamsPosts = $Result.DefaultSelection<Prisma.$TeamsPostsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusPosts: {
  PENDING: 'PENDING',
  DONE: 'DONE'
};

export type StatusPosts = (typeof StatusPosts)[keyof typeof StatusPosts]


export const StatusKeywords: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type StatusKeywords = (typeof StatusKeywords)[keyof typeof StatusKeywords]

}

export type StatusPosts = $Enums.StatusPosts

export const StatusPosts: typeof $Enums.StatusPosts

export type StatusKeywords = $Enums.StatusKeywords

export const StatusKeywords: typeof $Enums.StatusKeywords

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usersTeams`: Exposes CRUD operations for the **UsersTeams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersTeams
    * const usersTeams = await prisma.usersTeams.findMany()
    * ```
    */
  get usersTeams(): Prisma.UsersTeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keywords`: Exposes CRUD operations for the **Keywords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keywords.findMany()
    * ```
    */
  get keywords(): Prisma.KeywordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamsKeywords`: Exposes CRUD operations for the **TeamsKeywords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamsKeywords
    * const teamsKeywords = await prisma.teamsKeywords.findMany()
    * ```
    */
  get teamsKeywords(): Prisma.TeamsKeywordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamsPosts`: Exposes CRUD operations for the **TeamsPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamsPosts
    * const teamsPosts = await prisma.teamsPosts.findMany()
    * ```
    */
  get teamsPosts(): Prisma.TeamsPostsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Users: 'Users',
    Teams: 'Teams',
    UsersTeams: 'UsersTeams',
    Keywords: 'Keywords',
    TeamsKeywords: 'TeamsKeywords',
    Posts: 'Posts',
    Notes: 'Notes',
    TeamsPosts: 'TeamsPosts'
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
      modelProps: "users" | "teams" | "usersTeams" | "keywords" | "teamsKeywords" | "posts" | "notes" | "teamsPosts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      UsersTeams: {
        payload: Prisma.$UsersTeamsPayload<ExtArgs>
        fields: Prisma.UsersTeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersTeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersTeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          findFirst: {
            args: Prisma.UsersTeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersTeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          findMany: {
            args: Prisma.UsersTeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>[]
          }
          create: {
            args: Prisma.UsersTeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          createMany: {
            args: Prisma.UsersTeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersTeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>[]
          }
          delete: {
            args: Prisma.UsersTeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          update: {
            args: Prisma.UsersTeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          deleteMany: {
            args: Prisma.UsersTeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersTeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersTeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>[]
          }
          upsert: {
            args: Prisma.UsersTeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersTeamsPayload>
          }
          aggregate: {
            args: Prisma.UsersTeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsersTeams>
          }
          groupBy: {
            args: Prisma.UsersTeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersTeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersTeamsCountArgs<ExtArgs>
            result: $Utils.Optional<UsersTeamsCountAggregateOutputType> | number
          }
        }
      }
      Keywords: {
        payload: Prisma.$KeywordsPayload<ExtArgs>
        fields: Prisma.KeywordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          findFirst: {
            args: Prisma.KeywordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          findMany: {
            args: Prisma.KeywordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>[]
          }
          create: {
            args: Prisma.KeywordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          createMany: {
            args: Prisma.KeywordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>[]
          }
          delete: {
            args: Prisma.KeywordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          update: {
            args: Prisma.KeywordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          deleteMany: {
            args: Prisma.KeywordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>[]
          }
          upsert: {
            args: Prisma.KeywordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordsPayload>
          }
          aggregate: {
            args: Prisma.KeywordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeywords>
          }
          groupBy: {
            args: Prisma.KeywordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordsCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordsCountAggregateOutputType> | number
          }
        }
      }
      TeamsKeywords: {
        payload: Prisma.$TeamsKeywordsPayload<ExtArgs>
        fields: Prisma.TeamsKeywordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsKeywordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsKeywordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          findFirst: {
            args: Prisma.TeamsKeywordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsKeywordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          findMany: {
            args: Prisma.TeamsKeywordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>[]
          }
          create: {
            args: Prisma.TeamsKeywordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          createMany: {
            args: Prisma.TeamsKeywordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsKeywordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>[]
          }
          delete: {
            args: Prisma.TeamsKeywordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          update: {
            args: Prisma.TeamsKeywordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsKeywordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsKeywordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsKeywordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsKeywordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsKeywordsPayload>
          }
          aggregate: {
            args: Prisma.TeamsKeywordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamsKeywords>
          }
          groupBy: {
            args: Prisma.TeamsKeywordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsKeywordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsKeywordsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsKeywordsCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      TeamsPosts: {
        payload: Prisma.$TeamsPostsPayload<ExtArgs>
        fields: Prisma.TeamsPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsPostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsPostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          findFirst: {
            args: Prisma.TeamsPostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsPostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          findMany: {
            args: Prisma.TeamsPostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>[]
          }
          create: {
            args: Prisma.TeamsPostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          createMany: {
            args: Prisma.TeamsPostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsPostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>[]
          }
          delete: {
            args: Prisma.TeamsPostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          update: {
            args: Prisma.TeamsPostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsPostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsPostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsPostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsPostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPostsPayload>
          }
          aggregate: {
            args: Prisma.TeamsPostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamsPosts>
          }
          groupBy: {
            args: Prisma.TeamsPostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsPostsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsPostsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    teams?: TeamsOmit
    usersTeams?: UsersTeamsOmit
    keywords?: KeywordsOmit
    teamsKeywords?: TeamsKeywordsOmit
    posts?: PostsOmit
    notes?: NotesOmit
    teamsPosts?: TeamsPostsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    teams: number
    notes: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | UsersCountOutputTypeCountTeamsArgs
    notes?: boolean | UsersCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTeamsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    users: number
    keywords: number
    posts: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TeamsCountOutputTypeCountUsersArgs
    keywords?: boolean | TeamsCountOutputTypeCountKeywordsArgs
    posts?: boolean | TeamsCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTeamsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsKeywordsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsPostsWhereInput
  }


  /**
   * Count Type KeywordsCountOutputType
   */

  export type KeywordsCountOutputType = {
    teams: number
  }

  export type KeywordsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | KeywordsCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * KeywordsCountOutputType without action
   */
  export type KeywordsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordsCountOutputType
     */
    select?: KeywordsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordsCountOutputType without action
   */
  export type KeywordsCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsKeywordsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    teams: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | PostsCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsPostsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    teams?: boolean | Users$teamsArgs<ExtArgs>
    notes?: boolean | Users$notesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Users$teamsArgs<ExtArgs>
    notes?: boolean | Users$notesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      teams: Prisma.$UsersTeamsPayload<ExtArgs>[]
      notes: Prisma.$NotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Users$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Users$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Users$notesArgs<ExtArgs> = {}>(args?: Subset<T, Users$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.teams
   */
  export type Users$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    where?: UsersTeamsWhereInput
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    cursor?: UsersTeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersTeamsScalarFieldEnum | UsersTeamsScalarFieldEnum[]
  }

  /**
   * Users.notes
   */
  export type Users$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | Teams$usersArgs<ExtArgs>
    keywords?: boolean | Teams$keywordsArgs<ExtArgs>
    posts?: boolean | Teams$postsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["teams"]>
  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Teams$usersArgs<ExtArgs>
    keywords?: boolean | Teams$keywordsArgs<ExtArgs>
    posts?: boolean | Teams$postsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      users: Prisma.$UsersTeamsPayload<ExtArgs>[]
      keywords: Prisma.$TeamsKeywordsPayload<ExtArgs>[]
      posts: Prisma.$TeamsPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsFindUniqueArgs>(args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsFindFirstArgs>(args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsFindManyArgs>(args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends TeamsCreateArgs>(args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsCreateManyArgs>(args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends TeamsDeleteArgs>(args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsUpdateArgs>(args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsDeleteManyArgs>(args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsUpdateManyArgs>(args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends TeamsUpsertArgs>(args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Teams$usersArgs<ExtArgs> = {}>(args?: Subset<T, Teams$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Teams$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Teams$postsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teams model
   */
  interface TeamsFieldRefs {
    readonly id: FieldRef<"Teams", 'String'>
    readonly name: FieldRef<"Teams", 'String'>
    readonly createdAt: FieldRef<"Teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams createManyAndReturn
   */
  export type TeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams updateManyAndReturn
   */
  export type TeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Teams.users
   */
  export type Teams$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    where?: UsersTeamsWhereInput
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    cursor?: UsersTeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersTeamsScalarFieldEnum | UsersTeamsScalarFieldEnum[]
  }

  /**
   * Teams.keywords
   */
  export type Teams$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    where?: TeamsKeywordsWhereInput
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    cursor?: TeamsKeywordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsKeywordsScalarFieldEnum | TeamsKeywordsScalarFieldEnum[]
  }

  /**
   * Teams.posts
   */
  export type Teams$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    where?: TeamsPostsWhereInput
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    cursor?: TeamsPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsPostsScalarFieldEnum | TeamsPostsScalarFieldEnum[]
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model UsersTeams
   */

  export type AggregateUsersTeams = {
    _count: UsersTeamsCountAggregateOutputType | null
    _min: UsersTeamsMinAggregateOutputType | null
    _max: UsersTeamsMaxAggregateOutputType | null
  }

  export type UsersTeamsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type UsersTeamsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type UsersTeamsCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type UsersTeamsMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type UsersTeamsMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type UsersTeamsCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type UsersTeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersTeams to aggregate.
     */
    where?: UsersTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTeams to fetch.
     */
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersTeams
    **/
    _count?: true | UsersTeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersTeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersTeamsMaxAggregateInputType
  }

  export type GetUsersTeamsAggregateType<T extends UsersTeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersTeams[P]>
      : GetScalarType<T[P], AggregateUsersTeams[P]>
  }




  export type UsersTeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersTeamsWhereInput
    orderBy?: UsersTeamsOrderByWithAggregationInput | UsersTeamsOrderByWithAggregationInput[]
    by: UsersTeamsScalarFieldEnum[] | UsersTeamsScalarFieldEnum
    having?: UsersTeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersTeamsCountAggregateInputType | true
    _min?: UsersTeamsMinAggregateInputType
    _max?: UsersTeamsMaxAggregateInputType
  }

  export type UsersTeamsGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    createdAt: Date
    _count: UsersTeamsCountAggregateOutputType | null
    _min: UsersTeamsMinAggregateOutputType | null
    _max: UsersTeamsMaxAggregateOutputType | null
  }

  type GetUsersTeamsGroupByPayload<T extends UsersTeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersTeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersTeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersTeamsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersTeamsGroupByOutputType[P]>
        }
      >
    >


  export type UsersTeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersTeams"]>

  export type UsersTeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersTeams"]>

  export type UsersTeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersTeams"]>

  export type UsersTeamsSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type UsersTeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "createdAt", ExtArgs["result"]["usersTeams"]>
  export type UsersTeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type UsersTeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type UsersTeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $UsersTeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersTeams"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      createdAt: Date
    }, ExtArgs["result"]["usersTeams"]>
    composites: {}
  }

  type UsersTeamsGetPayload<S extends boolean | null | undefined | UsersTeamsDefaultArgs> = $Result.GetResult<Prisma.$UsersTeamsPayload, S>

  type UsersTeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersTeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersTeamsCountAggregateInputType | true
    }

  export interface UsersTeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersTeams'], meta: { name: 'UsersTeams' } }
    /**
     * Find zero or one UsersTeams that matches the filter.
     * @param {UsersTeamsFindUniqueArgs} args - Arguments to find a UsersTeams
     * @example
     * // Get one UsersTeams
     * const usersTeams = await prisma.usersTeams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersTeamsFindUniqueArgs>(args: SelectSubset<T, UsersTeamsFindUniqueArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsersTeams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersTeamsFindUniqueOrThrowArgs} args - Arguments to find a UsersTeams
     * @example
     * // Get one UsersTeams
     * const usersTeams = await prisma.usersTeams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersTeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersTeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsFindFirstArgs} args - Arguments to find a UsersTeams
     * @example
     * // Get one UsersTeams
     * const usersTeams = await prisma.usersTeams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersTeamsFindFirstArgs>(args?: SelectSubset<T, UsersTeamsFindFirstArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsersTeams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsFindFirstOrThrowArgs} args - Arguments to find a UsersTeams
     * @example
     * // Get one UsersTeams
     * const usersTeams = await prisma.usersTeams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersTeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersTeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsersTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersTeams
     * const usersTeams = await prisma.usersTeams.findMany()
     * 
     * // Get first 10 UsersTeams
     * const usersTeams = await prisma.usersTeams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersTeamsWithIdOnly = await prisma.usersTeams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersTeamsFindManyArgs>(args?: SelectSubset<T, UsersTeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsersTeams.
     * @param {UsersTeamsCreateArgs} args - Arguments to create a UsersTeams.
     * @example
     * // Create one UsersTeams
     * const UsersTeams = await prisma.usersTeams.create({
     *   data: {
     *     // ... data to create a UsersTeams
     *   }
     * })
     * 
     */
    create<T extends UsersTeamsCreateArgs>(args: SelectSubset<T, UsersTeamsCreateArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsersTeams.
     * @param {UsersTeamsCreateManyArgs} args - Arguments to create many UsersTeams.
     * @example
     * // Create many UsersTeams
     * const usersTeams = await prisma.usersTeams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersTeamsCreateManyArgs>(args?: SelectSubset<T, UsersTeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsersTeams and returns the data saved in the database.
     * @param {UsersTeamsCreateManyAndReturnArgs} args - Arguments to create many UsersTeams.
     * @example
     * // Create many UsersTeams
     * const usersTeams = await prisma.usersTeams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsersTeams and only return the `id`
     * const usersTeamsWithIdOnly = await prisma.usersTeams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersTeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersTeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsersTeams.
     * @param {UsersTeamsDeleteArgs} args - Arguments to delete one UsersTeams.
     * @example
     * // Delete one UsersTeams
     * const UsersTeams = await prisma.usersTeams.delete({
     *   where: {
     *     // ... filter to delete one UsersTeams
     *   }
     * })
     * 
     */
    delete<T extends UsersTeamsDeleteArgs>(args: SelectSubset<T, UsersTeamsDeleteArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsersTeams.
     * @param {UsersTeamsUpdateArgs} args - Arguments to update one UsersTeams.
     * @example
     * // Update one UsersTeams
     * const usersTeams = await prisma.usersTeams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersTeamsUpdateArgs>(args: SelectSubset<T, UsersTeamsUpdateArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsersTeams.
     * @param {UsersTeamsDeleteManyArgs} args - Arguments to filter UsersTeams to delete.
     * @example
     * // Delete a few UsersTeams
     * const { count } = await prisma.usersTeams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersTeamsDeleteManyArgs>(args?: SelectSubset<T, UsersTeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersTeams
     * const usersTeams = await prisma.usersTeams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersTeamsUpdateManyArgs>(args: SelectSubset<T, UsersTeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersTeams and returns the data updated in the database.
     * @param {UsersTeamsUpdateManyAndReturnArgs} args - Arguments to update many UsersTeams.
     * @example
     * // Update many UsersTeams
     * const usersTeams = await prisma.usersTeams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsersTeams and only return the `id`
     * const usersTeamsWithIdOnly = await prisma.usersTeams.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersTeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersTeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsersTeams.
     * @param {UsersTeamsUpsertArgs} args - Arguments to update or create a UsersTeams.
     * @example
     * // Update or create a UsersTeams
     * const usersTeams = await prisma.usersTeams.upsert({
     *   create: {
     *     // ... data to create a UsersTeams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersTeams we want to update
     *   }
     * })
     */
    upsert<T extends UsersTeamsUpsertArgs>(args: SelectSubset<T, UsersTeamsUpsertArgs<ExtArgs>>): Prisma__UsersTeamsClient<$Result.GetResult<Prisma.$UsersTeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsersTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsCountArgs} args - Arguments to filter UsersTeams to count.
     * @example
     * // Count the number of UsersTeams
     * const count = await prisma.usersTeams.count({
     *   where: {
     *     // ... the filter for the UsersTeams we want to count
     *   }
     * })
    **/
    count<T extends UsersTeamsCountArgs>(
      args?: Subset<T, UsersTeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersTeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersTeamsAggregateArgs>(args: Subset<T, UsersTeamsAggregateArgs>): Prisma.PrismaPromise<GetUsersTeamsAggregateType<T>>

    /**
     * Group by UsersTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersTeamsGroupByArgs} args - Group by arguments.
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
      T extends UsersTeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersTeamsGroupByArgs['orderBy'] }
        : { orderBy?: UsersTeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersTeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersTeams model
   */
  readonly fields: UsersTeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersTeams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersTeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsersTeams model
   */
  interface UsersTeamsFieldRefs {
    readonly id: FieldRef<"UsersTeams", 'String'>
    readonly userId: FieldRef<"UsersTeams", 'String'>
    readonly teamId: FieldRef<"UsersTeams", 'String'>
    readonly createdAt: FieldRef<"UsersTeams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsersTeams findUnique
   */
  export type UsersTeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTeams to fetch.
     */
    where: UsersTeamsWhereUniqueInput
  }

  /**
   * UsersTeams findUniqueOrThrow
   */
  export type UsersTeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTeams to fetch.
     */
    where: UsersTeamsWhereUniqueInput
  }

  /**
   * UsersTeams findFirst
   */
  export type UsersTeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTeams to fetch.
     */
    where?: UsersTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTeams to fetch.
     */
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersTeams.
     */
    cursor?: UsersTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersTeams.
     */
    distinct?: UsersTeamsScalarFieldEnum | UsersTeamsScalarFieldEnum[]
  }

  /**
   * UsersTeams findFirstOrThrow
   */
  export type UsersTeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTeams to fetch.
     */
    where?: UsersTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTeams to fetch.
     */
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersTeams.
     */
    cursor?: UsersTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersTeams.
     */
    distinct?: UsersTeamsScalarFieldEnum | UsersTeamsScalarFieldEnum[]
  }

  /**
   * UsersTeams findMany
   */
  export type UsersTeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter, which UsersTeams to fetch.
     */
    where?: UsersTeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersTeams to fetch.
     */
    orderBy?: UsersTeamsOrderByWithRelationInput | UsersTeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersTeams.
     */
    cursor?: UsersTeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersTeams.
     */
    skip?: number
    distinct?: UsersTeamsScalarFieldEnum | UsersTeamsScalarFieldEnum[]
  }

  /**
   * UsersTeams create
   */
  export type UsersTeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersTeams.
     */
    data: XOR<UsersTeamsCreateInput, UsersTeamsUncheckedCreateInput>
  }

  /**
   * UsersTeams createMany
   */
  export type UsersTeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersTeams.
     */
    data: UsersTeamsCreateManyInput | UsersTeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsersTeams createManyAndReturn
   */
  export type UsersTeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * The data used to create many UsersTeams.
     */
    data: UsersTeamsCreateManyInput | UsersTeamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersTeams update
   */
  export type UsersTeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersTeams.
     */
    data: XOR<UsersTeamsUpdateInput, UsersTeamsUncheckedUpdateInput>
    /**
     * Choose, which UsersTeams to update.
     */
    where: UsersTeamsWhereUniqueInput
  }

  /**
   * UsersTeams updateMany
   */
  export type UsersTeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersTeams.
     */
    data: XOR<UsersTeamsUpdateManyMutationInput, UsersTeamsUncheckedUpdateManyInput>
    /**
     * Filter which UsersTeams to update
     */
    where?: UsersTeamsWhereInput
    /**
     * Limit how many UsersTeams to update.
     */
    limit?: number
  }

  /**
   * UsersTeams updateManyAndReturn
   */
  export type UsersTeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * The data used to update UsersTeams.
     */
    data: XOR<UsersTeamsUpdateManyMutationInput, UsersTeamsUncheckedUpdateManyInput>
    /**
     * Filter which UsersTeams to update
     */
    where?: UsersTeamsWhereInput
    /**
     * Limit how many UsersTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsersTeams upsert
   */
  export type UsersTeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersTeams to update in case it exists.
     */
    where: UsersTeamsWhereUniqueInput
    /**
     * In case the UsersTeams found by the `where` argument doesn't exist, create a new UsersTeams with this data.
     */
    create: XOR<UsersTeamsCreateInput, UsersTeamsUncheckedCreateInput>
    /**
     * In case the UsersTeams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersTeamsUpdateInput, UsersTeamsUncheckedUpdateInput>
  }

  /**
   * UsersTeams delete
   */
  export type UsersTeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
    /**
     * Filter which UsersTeams to delete.
     */
    where: UsersTeamsWhereUniqueInput
  }

  /**
   * UsersTeams deleteMany
   */
  export type UsersTeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersTeams to delete
     */
    where?: UsersTeamsWhereInput
    /**
     * Limit how many UsersTeams to delete.
     */
    limit?: number
  }

  /**
   * UsersTeams without action
   */
  export type UsersTeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersTeams
     */
    select?: UsersTeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsersTeams
     */
    omit?: UsersTeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersTeamsInclude<ExtArgs> | null
  }


  /**
   * Model Keywords
   */

  export type AggregateKeywords = {
    _count: KeywordsCountAggregateOutputType | null
    _min: KeywordsMinAggregateOutputType | null
    _max: KeywordsMaxAggregateOutputType | null
  }

  export type KeywordsMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    createdAt: Date | null
  }

  export type KeywordsMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    createdAt: Date | null
  }

  export type KeywordsCountAggregateOutputType = {
    id: number
    keyword: number
    createdAt: number
    _all: number
  }


  export type KeywordsMinAggregateInputType = {
    id?: true
    keyword?: true
    createdAt?: true
  }

  export type KeywordsMaxAggregateInputType = {
    id?: true
    keyword?: true
    createdAt?: true
  }

  export type KeywordsCountAggregateInputType = {
    id?: true
    keyword?: true
    createdAt?: true
    _all?: true
  }

  export type KeywordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to aggregate.
     */
    where?: KeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordsOrderByWithRelationInput | KeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordsMaxAggregateInputType
  }

  export type GetKeywordsAggregateType<T extends KeywordsAggregateArgs> = {
        [P in keyof T & keyof AggregateKeywords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeywords[P]>
      : GetScalarType<T[P], AggregateKeywords[P]>
  }




  export type KeywordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordsWhereInput
    orderBy?: KeywordsOrderByWithAggregationInput | KeywordsOrderByWithAggregationInput[]
    by: KeywordsScalarFieldEnum[] | KeywordsScalarFieldEnum
    having?: KeywordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordsCountAggregateInputType | true
    _min?: KeywordsMinAggregateInputType
    _max?: KeywordsMaxAggregateInputType
  }

  export type KeywordsGroupByOutputType = {
    id: string
    keyword: string
    createdAt: Date
    _count: KeywordsCountAggregateOutputType | null
    _min: KeywordsMinAggregateOutputType | null
    _max: KeywordsMaxAggregateOutputType | null
  }

  type GetKeywordsGroupByPayload<T extends KeywordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordsGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordsGroupByOutputType[P]>
        }
      >
    >


  export type KeywordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    createdAt?: boolean
    teams?: boolean | Keywords$teamsArgs<ExtArgs>
    _count?: boolean | KeywordsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keywords"]>

  export type KeywordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keywords"]>

  export type KeywordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["keywords"]>

  export type KeywordsSelectScalar = {
    id?: boolean
    keyword?: boolean
    createdAt?: boolean
  }

  export type KeywordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "createdAt", ExtArgs["result"]["keywords"]>
  export type KeywordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Keywords$teamsArgs<ExtArgs>
    _count?: boolean | KeywordsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeywordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeywordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeywordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keywords"
    objects: {
      teams: Prisma.$TeamsKeywordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      createdAt: Date
    }, ExtArgs["result"]["keywords"]>
    composites: {}
  }

  type KeywordsGetPayload<S extends boolean | null | undefined | KeywordsDefaultArgs> = $Result.GetResult<Prisma.$KeywordsPayload, S>

  type KeywordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordsCountAggregateInputType | true
    }

  export interface KeywordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keywords'], meta: { name: 'Keywords' } }
    /**
     * Find zero or one Keywords that matches the filter.
     * @param {KeywordsFindUniqueArgs} args - Arguments to find a Keywords
     * @example
     * // Get one Keywords
     * const keywords = await prisma.keywords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordsFindUniqueArgs>(args: SelectSubset<T, KeywordsFindUniqueArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keywords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordsFindUniqueOrThrowArgs} args - Arguments to find a Keywords
     * @example
     * // Get one Keywords
     * const keywords = await prisma.keywords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordsFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsFindFirstArgs} args - Arguments to find a Keywords
     * @example
     * // Get one Keywords
     * const keywords = await prisma.keywords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordsFindFirstArgs>(args?: SelectSubset<T, KeywordsFindFirstArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keywords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsFindFirstOrThrowArgs} args - Arguments to find a Keywords
     * @example
     * // Get one Keywords
     * const keywords = await prisma.keywords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordsFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keywords.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keywords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordsWithIdOnly = await prisma.keywords.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordsFindManyArgs>(args?: SelectSubset<T, KeywordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keywords.
     * @param {KeywordsCreateArgs} args - Arguments to create a Keywords.
     * @example
     * // Create one Keywords
     * const Keywords = await prisma.keywords.create({
     *   data: {
     *     // ... data to create a Keywords
     *   }
     * })
     * 
     */
    create<T extends KeywordsCreateArgs>(args: SelectSubset<T, KeywordsCreateArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordsCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keywords = await prisma.keywords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordsCreateManyArgs>(args?: SelectSubset<T, KeywordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordsCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keywords = await prisma.keywords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordsWithIdOnly = await prisma.keywords.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordsCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keywords.
     * @param {KeywordsDeleteArgs} args - Arguments to delete one Keywords.
     * @example
     * // Delete one Keywords
     * const Keywords = await prisma.keywords.delete({
     *   where: {
     *     // ... filter to delete one Keywords
     *   }
     * })
     * 
     */
    delete<T extends KeywordsDeleteArgs>(args: SelectSubset<T, KeywordsDeleteArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keywords.
     * @param {KeywordsUpdateArgs} args - Arguments to update one Keywords.
     * @example
     * // Update one Keywords
     * const keywords = await prisma.keywords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordsUpdateArgs>(args: SelectSubset<T, KeywordsUpdateArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordsDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keywords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordsDeleteManyArgs>(args?: SelectSubset<T, KeywordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keywords = await prisma.keywords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordsUpdateManyArgs>(args: SelectSubset<T, KeywordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordsUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keywords = await prisma.keywords.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordsWithIdOnly = await prisma.keywords.updateManyAndReturn({
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
    updateManyAndReturn<T extends KeywordsUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keywords.
     * @param {KeywordsUpsertArgs} args - Arguments to update or create a Keywords.
     * @example
     * // Update or create a Keywords
     * const keywords = await prisma.keywords.upsert({
     *   create: {
     *     // ... data to create a Keywords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keywords we want to update
     *   }
     * })
     */
    upsert<T extends KeywordsUpsertArgs>(args: SelectSubset<T, KeywordsUpsertArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keywords.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordsCountArgs>(
      args?: Subset<T, KeywordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeywordsAggregateArgs>(args: Subset<T, KeywordsAggregateArgs>): Prisma.PrismaPromise<GetKeywordsAggregateType<T>>

    /**
     * Group by Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordsGroupByArgs} args - Group by arguments.
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
      T extends KeywordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordsGroupByArgs['orderBy'] }
        : { orderBy?: KeywordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeywordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keywords model
   */
  readonly fields: KeywordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keywords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Keywords$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Keywords$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Keywords model
   */
  interface KeywordsFieldRefs {
    readonly id: FieldRef<"Keywords", 'String'>
    readonly keyword: FieldRef<"Keywords", 'String'>
    readonly createdAt: FieldRef<"Keywords", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Keywords findUnique
   */
  export type KeywordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where: KeywordsWhereUniqueInput
  }

  /**
   * Keywords findUniqueOrThrow
   */
  export type KeywordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where: KeywordsWhereUniqueInput
  }

  /**
   * Keywords findFirst
   */
  export type KeywordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordsOrderByWithRelationInput | KeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordsScalarFieldEnum | KeywordsScalarFieldEnum[]
  }

  /**
   * Keywords findFirstOrThrow
   */
  export type KeywordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordsOrderByWithRelationInput | KeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordsScalarFieldEnum | KeywordsScalarFieldEnum[]
  }

  /**
   * Keywords findMany
   */
  export type KeywordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordsOrderByWithRelationInput | KeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordsScalarFieldEnum | KeywordsScalarFieldEnum[]
  }

  /**
   * Keywords create
   */
  export type KeywordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Keywords.
     */
    data: XOR<KeywordsCreateInput, KeywordsUncheckedCreateInput>
  }

  /**
   * Keywords createMany
   */
  export type KeywordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordsCreateManyInput | KeywordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keywords createManyAndReturn
   */
  export type KeywordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordsCreateManyInput | KeywordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keywords update
   */
  export type KeywordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Keywords.
     */
    data: XOR<KeywordsUpdateInput, KeywordsUncheckedUpdateInput>
    /**
     * Choose, which Keywords to update.
     */
    where: KeywordsWhereUniqueInput
  }

  /**
   * Keywords updateMany
   */
  export type KeywordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordsUpdateManyMutationInput, KeywordsUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordsWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keywords updateManyAndReturn
   */
  export type KeywordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordsUpdateManyMutationInput, KeywordsUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordsWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keywords upsert
   */
  export type KeywordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Keywords to update in case it exists.
     */
    where: KeywordsWhereUniqueInput
    /**
     * In case the Keywords found by the `where` argument doesn't exist, create a new Keywords with this data.
     */
    create: XOR<KeywordsCreateInput, KeywordsUncheckedCreateInput>
    /**
     * In case the Keywords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordsUpdateInput, KeywordsUncheckedUpdateInput>
  }

  /**
   * Keywords delete
   */
  export type KeywordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
    /**
     * Filter which Keywords to delete.
     */
    where: KeywordsWhereUniqueInput
  }

  /**
   * Keywords deleteMany
   */
  export type KeywordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordsWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keywords.teams
   */
  export type Keywords$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    where?: TeamsKeywordsWhereInput
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    cursor?: TeamsKeywordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsKeywordsScalarFieldEnum | TeamsKeywordsScalarFieldEnum[]
  }

  /**
   * Keywords without action
   */
  export type KeywordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keywords
     */
    select?: KeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keywords
     */
    omit?: KeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordsInclude<ExtArgs> | null
  }


  /**
   * Model TeamsKeywords
   */

  export type AggregateTeamsKeywords = {
    _count: TeamsKeywordsCountAggregateOutputType | null
    _min: TeamsKeywordsMinAggregateOutputType | null
    _max: TeamsKeywordsMaxAggregateOutputType | null
  }

  export type TeamsKeywordsMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    keywordId: string | null
    statut: $Enums.StatusKeywords | null
    createdAt: Date | null
  }

  export type TeamsKeywordsMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    keywordId: string | null
    statut: $Enums.StatusKeywords | null
    createdAt: Date | null
  }

  export type TeamsKeywordsCountAggregateOutputType = {
    id: number
    teamId: number
    keywordId: number
    statut: number
    createdAt: number
    _all: number
  }


  export type TeamsKeywordsMinAggregateInputType = {
    id?: true
    teamId?: true
    keywordId?: true
    statut?: true
    createdAt?: true
  }

  export type TeamsKeywordsMaxAggregateInputType = {
    id?: true
    teamId?: true
    keywordId?: true
    statut?: true
    createdAt?: true
  }

  export type TeamsKeywordsCountAggregateInputType = {
    id?: true
    teamId?: true
    keywordId?: true
    statut?: true
    createdAt?: true
    _all?: true
  }

  export type TeamsKeywordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsKeywords to aggregate.
     */
    where?: TeamsKeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsKeywords to fetch.
     */
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsKeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamsKeywords
    **/
    _count?: true | TeamsKeywordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsKeywordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsKeywordsMaxAggregateInputType
  }

  export type GetTeamsKeywordsAggregateType<T extends TeamsKeywordsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamsKeywords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamsKeywords[P]>
      : GetScalarType<T[P], AggregateTeamsKeywords[P]>
  }




  export type TeamsKeywordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsKeywordsWhereInput
    orderBy?: TeamsKeywordsOrderByWithAggregationInput | TeamsKeywordsOrderByWithAggregationInput[]
    by: TeamsKeywordsScalarFieldEnum[] | TeamsKeywordsScalarFieldEnum
    having?: TeamsKeywordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsKeywordsCountAggregateInputType | true
    _min?: TeamsKeywordsMinAggregateInputType
    _max?: TeamsKeywordsMaxAggregateInputType
  }

  export type TeamsKeywordsGroupByOutputType = {
    id: string
    teamId: string
    keywordId: string
    statut: $Enums.StatusKeywords
    createdAt: Date
    _count: TeamsKeywordsCountAggregateOutputType | null
    _min: TeamsKeywordsMinAggregateOutputType | null
    _max: TeamsKeywordsMaxAggregateOutputType | null
  }

  type GetTeamsKeywordsGroupByPayload<T extends TeamsKeywordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsKeywordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsKeywordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsKeywordsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsKeywordsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsKeywordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    keywordId?: boolean
    statut?: boolean
    createdAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsKeywords"]>

  export type TeamsKeywordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    keywordId?: boolean
    statut?: boolean
    createdAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsKeywords"]>

  export type TeamsKeywordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    keywordId?: boolean
    statut?: boolean
    createdAt?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamsKeywords"]>

  export type TeamsKeywordsSelectScalar = {
    id?: boolean
    teamId?: boolean
    keywordId?: boolean
    statut?: boolean
    createdAt?: boolean
  }

  export type TeamsKeywordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "keywordId" | "statut" | "createdAt", ExtArgs["result"]["teamsKeywords"]>
  export type TeamsKeywordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }
  export type TeamsKeywordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }
  export type TeamsKeywordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    keyword?: boolean | KeywordsDefaultArgs<ExtArgs>
  }

  export type $TeamsKeywordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamsKeywords"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      keyword: Prisma.$KeywordsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      keywordId: string
      statut: $Enums.StatusKeywords
      createdAt: Date
    }, ExtArgs["result"]["teamsKeywords"]>
    composites: {}
  }

  type TeamsKeywordsGetPayload<S extends boolean | null | undefined | TeamsKeywordsDefaultArgs> = $Result.GetResult<Prisma.$TeamsKeywordsPayload, S>

  type TeamsKeywordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsKeywordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsKeywordsCountAggregateInputType | true
    }

  export interface TeamsKeywordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamsKeywords'], meta: { name: 'TeamsKeywords' } }
    /**
     * Find zero or one TeamsKeywords that matches the filter.
     * @param {TeamsKeywordsFindUniqueArgs} args - Arguments to find a TeamsKeywords
     * @example
     * // Get one TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsKeywordsFindUniqueArgs>(args: SelectSubset<T, TeamsKeywordsFindUniqueArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamsKeywords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsKeywordsFindUniqueOrThrowArgs} args - Arguments to find a TeamsKeywords
     * @example
     * // Get one TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsKeywordsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsKeywordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsFindFirstArgs} args - Arguments to find a TeamsKeywords
     * @example
     * // Get one TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsKeywordsFindFirstArgs>(args?: SelectSubset<T, TeamsKeywordsFindFirstArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsKeywords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsFindFirstOrThrowArgs} args - Arguments to find a TeamsKeywords
     * @example
     * // Get one TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsKeywordsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsKeywordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamsKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findMany()
     * 
     * // Get first 10 TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsKeywordsWithIdOnly = await prisma.teamsKeywords.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsKeywordsFindManyArgs>(args?: SelectSubset<T, TeamsKeywordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamsKeywords.
     * @param {TeamsKeywordsCreateArgs} args - Arguments to create a TeamsKeywords.
     * @example
     * // Create one TeamsKeywords
     * const TeamsKeywords = await prisma.teamsKeywords.create({
     *   data: {
     *     // ... data to create a TeamsKeywords
     *   }
     * })
     * 
     */
    create<T extends TeamsKeywordsCreateArgs>(args: SelectSubset<T, TeamsKeywordsCreateArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamsKeywords.
     * @param {TeamsKeywordsCreateManyArgs} args - Arguments to create many TeamsKeywords.
     * @example
     * // Create many TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsKeywordsCreateManyArgs>(args?: SelectSubset<T, TeamsKeywordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamsKeywords and returns the data saved in the database.
     * @param {TeamsKeywordsCreateManyAndReturnArgs} args - Arguments to create many TeamsKeywords.
     * @example
     * // Create many TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamsKeywords and only return the `id`
     * const teamsKeywordsWithIdOnly = await prisma.teamsKeywords.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsKeywordsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsKeywordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamsKeywords.
     * @param {TeamsKeywordsDeleteArgs} args - Arguments to delete one TeamsKeywords.
     * @example
     * // Delete one TeamsKeywords
     * const TeamsKeywords = await prisma.teamsKeywords.delete({
     *   where: {
     *     // ... filter to delete one TeamsKeywords
     *   }
     * })
     * 
     */
    delete<T extends TeamsKeywordsDeleteArgs>(args: SelectSubset<T, TeamsKeywordsDeleteArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamsKeywords.
     * @param {TeamsKeywordsUpdateArgs} args - Arguments to update one TeamsKeywords.
     * @example
     * // Update one TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsKeywordsUpdateArgs>(args: SelectSubset<T, TeamsKeywordsUpdateArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamsKeywords.
     * @param {TeamsKeywordsDeleteManyArgs} args - Arguments to filter TeamsKeywords to delete.
     * @example
     * // Delete a few TeamsKeywords
     * const { count } = await prisma.teamsKeywords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsKeywordsDeleteManyArgs>(args?: SelectSubset<T, TeamsKeywordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsKeywordsUpdateManyArgs>(args: SelectSubset<T, TeamsKeywordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsKeywords and returns the data updated in the database.
     * @param {TeamsKeywordsUpdateManyAndReturnArgs} args - Arguments to update many TeamsKeywords.
     * @example
     * // Update many TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamsKeywords and only return the `id`
     * const teamsKeywordsWithIdOnly = await prisma.teamsKeywords.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamsKeywordsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsKeywordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamsKeywords.
     * @param {TeamsKeywordsUpsertArgs} args - Arguments to update or create a TeamsKeywords.
     * @example
     * // Update or create a TeamsKeywords
     * const teamsKeywords = await prisma.teamsKeywords.upsert({
     *   create: {
     *     // ... data to create a TeamsKeywords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamsKeywords we want to update
     *   }
     * })
     */
    upsert<T extends TeamsKeywordsUpsertArgs>(args: SelectSubset<T, TeamsKeywordsUpsertArgs<ExtArgs>>): Prisma__TeamsKeywordsClient<$Result.GetResult<Prisma.$TeamsKeywordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamsKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsCountArgs} args - Arguments to filter TeamsKeywords to count.
     * @example
     * // Count the number of TeamsKeywords
     * const count = await prisma.teamsKeywords.count({
     *   where: {
     *     // ... the filter for the TeamsKeywords we want to count
     *   }
     * })
    **/
    count<T extends TeamsKeywordsCountArgs>(
      args?: Subset<T, TeamsKeywordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsKeywordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamsKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsKeywordsAggregateArgs>(args: Subset<T, TeamsKeywordsAggregateArgs>): Prisma.PrismaPromise<GetTeamsKeywordsAggregateType<T>>

    /**
     * Group by TeamsKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsKeywordsGroupByArgs} args - Group by arguments.
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
      T extends TeamsKeywordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsKeywordsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsKeywordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsKeywordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsKeywordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamsKeywords model
   */
  readonly fields: TeamsKeywordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamsKeywords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsKeywordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    keyword<T extends KeywordsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordsDefaultArgs<ExtArgs>>): Prisma__KeywordsClient<$Result.GetResult<Prisma.$KeywordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamsKeywords model
   */
  interface TeamsKeywordsFieldRefs {
    readonly id: FieldRef<"TeamsKeywords", 'String'>
    readonly teamId: FieldRef<"TeamsKeywords", 'String'>
    readonly keywordId: FieldRef<"TeamsKeywords", 'String'>
    readonly statut: FieldRef<"TeamsKeywords", 'StatusKeywords'>
    readonly createdAt: FieldRef<"TeamsKeywords", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamsKeywords findUnique
   */
  export type TeamsKeywordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsKeywords to fetch.
     */
    where: TeamsKeywordsWhereUniqueInput
  }

  /**
   * TeamsKeywords findUniqueOrThrow
   */
  export type TeamsKeywordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsKeywords to fetch.
     */
    where: TeamsKeywordsWhereUniqueInput
  }

  /**
   * TeamsKeywords findFirst
   */
  export type TeamsKeywordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsKeywords to fetch.
     */
    where?: TeamsKeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsKeywords to fetch.
     */
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsKeywords.
     */
    cursor?: TeamsKeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsKeywords.
     */
    distinct?: TeamsKeywordsScalarFieldEnum | TeamsKeywordsScalarFieldEnum[]
  }

  /**
   * TeamsKeywords findFirstOrThrow
   */
  export type TeamsKeywordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsKeywords to fetch.
     */
    where?: TeamsKeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsKeywords to fetch.
     */
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsKeywords.
     */
    cursor?: TeamsKeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsKeywords.
     */
    distinct?: TeamsKeywordsScalarFieldEnum | TeamsKeywordsScalarFieldEnum[]
  }

  /**
   * TeamsKeywords findMany
   */
  export type TeamsKeywordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsKeywords to fetch.
     */
    where?: TeamsKeywordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsKeywords to fetch.
     */
    orderBy?: TeamsKeywordsOrderByWithRelationInput | TeamsKeywordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamsKeywords.
     */
    cursor?: TeamsKeywordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsKeywords.
     */
    skip?: number
    distinct?: TeamsKeywordsScalarFieldEnum | TeamsKeywordsScalarFieldEnum[]
  }

  /**
   * TeamsKeywords create
   */
  export type TeamsKeywordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamsKeywords.
     */
    data: XOR<TeamsKeywordsCreateInput, TeamsKeywordsUncheckedCreateInput>
  }

  /**
   * TeamsKeywords createMany
   */
  export type TeamsKeywordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamsKeywords.
     */
    data: TeamsKeywordsCreateManyInput | TeamsKeywordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamsKeywords createManyAndReturn
   */
  export type TeamsKeywordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * The data used to create many TeamsKeywords.
     */
    data: TeamsKeywordsCreateManyInput | TeamsKeywordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsKeywords update
   */
  export type TeamsKeywordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamsKeywords.
     */
    data: XOR<TeamsKeywordsUpdateInput, TeamsKeywordsUncheckedUpdateInput>
    /**
     * Choose, which TeamsKeywords to update.
     */
    where: TeamsKeywordsWhereUniqueInput
  }

  /**
   * TeamsKeywords updateMany
   */
  export type TeamsKeywordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamsKeywords.
     */
    data: XOR<TeamsKeywordsUpdateManyMutationInput, TeamsKeywordsUncheckedUpdateManyInput>
    /**
     * Filter which TeamsKeywords to update
     */
    where?: TeamsKeywordsWhereInput
    /**
     * Limit how many TeamsKeywords to update.
     */
    limit?: number
  }

  /**
   * TeamsKeywords updateManyAndReturn
   */
  export type TeamsKeywordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * The data used to update TeamsKeywords.
     */
    data: XOR<TeamsKeywordsUpdateManyMutationInput, TeamsKeywordsUncheckedUpdateManyInput>
    /**
     * Filter which TeamsKeywords to update
     */
    where?: TeamsKeywordsWhereInput
    /**
     * Limit how many TeamsKeywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsKeywords upsert
   */
  export type TeamsKeywordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamsKeywords to update in case it exists.
     */
    where: TeamsKeywordsWhereUniqueInput
    /**
     * In case the TeamsKeywords found by the `where` argument doesn't exist, create a new TeamsKeywords with this data.
     */
    create: XOR<TeamsKeywordsCreateInput, TeamsKeywordsUncheckedCreateInput>
    /**
     * In case the TeamsKeywords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsKeywordsUpdateInput, TeamsKeywordsUncheckedUpdateInput>
  }

  /**
   * TeamsKeywords delete
   */
  export type TeamsKeywordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
    /**
     * Filter which TeamsKeywords to delete.
     */
    where: TeamsKeywordsWhereUniqueInput
  }

  /**
   * TeamsKeywords deleteMany
   */
  export type TeamsKeywordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsKeywords to delete
     */
    where?: TeamsKeywordsWhereInput
    /**
     * Limit how many TeamsKeywords to delete.
     */
    limit?: number
  }

  /**
   * TeamsKeywords without action
   */
  export type TeamsKeywordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsKeywords
     */
    select?: TeamsKeywordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsKeywords
     */
    omit?: TeamsKeywordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsKeywordsInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    text: string | null
    subreddit: string | null
    author: string | null
    createdAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    text: string | null
    subreddit: string | null
    author: string | null
    createdAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    url: number
    title: number
    text: number
    subreddit: number
    author: number
    createdAt: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    text?: true
    subreddit?: true
    author?: true
    createdAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    text?: true
    subreddit?: true
    author?: true
    createdAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    text?: true
    subreddit?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    url: string
    title: string
    text: string | null
    subreddit: string
    author: string
    createdAt: Date
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    text?: boolean
    subreddit?: boolean
    author?: boolean
    createdAt?: boolean
    teams?: boolean | Posts$teamsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    text?: boolean
    subreddit?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    text?: boolean
    subreddit?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    text?: boolean
    subreddit?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "text" | "subreddit" | "author" | "createdAt", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Posts$teamsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      teams: Prisma.$TeamsPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string
      text: string | null
      subreddit: string
      author: string
      createdAt: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Posts$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly url: FieldRef<"Posts", 'String'>
    readonly title: FieldRef<"Posts", 'String'>
    readonly text: FieldRef<"Posts", 'String'>
    readonly subreddit: FieldRef<"Posts", 'String'>
    readonly author: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.teams
   */
  export type Posts$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    where?: TeamsPostsWhereInput
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    cursor?: TeamsPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsPostsScalarFieldEnum | TeamsPostsScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    text: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    text: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    text: number
    userId: number
    createdAt: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    createdAt?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    createdAt?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    text?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    text: string
    userId: string
    createdAt: Date
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    teamsPosts?: boolean | Notes$teamsPostsArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectScalar = {
    id?: boolean
    text?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "userId" | "createdAt", ExtArgs["result"]["notes"]>
  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    teamsPosts?: boolean | Notes$teamsPostsArgs<ExtArgs>
  }
  export type NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      teamsPosts: Prisma.$TeamsPostsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NotesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NotesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
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
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teamsPosts<T extends Notes$teamsPostsArgs<ExtArgs> = {}>(args?: Subset<T, Notes$teamsPostsArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notes model
   */
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'String'>
    readonly text: FieldRef<"Notes", 'String'>
    readonly userId: FieldRef<"Notes", 'String'>
    readonly createdAt: FieldRef<"Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes createManyAndReturn
   */
  export type NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes updateManyAndReturn
   */
  export type NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes.teamsPosts
   */
  export type Notes$teamsPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    where?: TeamsPostsWhereInput
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model TeamsPosts
   */

  export type AggregateTeamsPosts = {
    _count: TeamsPostsCountAggregateOutputType | null
    _min: TeamsPostsMinAggregateOutputType | null
    _max: TeamsPostsMaxAggregateOutputType | null
  }

  export type TeamsPostsMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    postId: string | null
    noteId: string | null
    statut: $Enums.StatusPosts | null
  }

  export type TeamsPostsMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    postId: string | null
    noteId: string | null
    statut: $Enums.StatusPosts | null
  }

  export type TeamsPostsCountAggregateOutputType = {
    id: number
    teamId: number
    postId: number
    noteId: number
    statut: number
    _all: number
  }


  export type TeamsPostsMinAggregateInputType = {
    id?: true
    teamId?: true
    postId?: true
    noteId?: true
    statut?: true
  }

  export type TeamsPostsMaxAggregateInputType = {
    id?: true
    teamId?: true
    postId?: true
    noteId?: true
    statut?: true
  }

  export type TeamsPostsCountAggregateInputType = {
    id?: true
    teamId?: true
    postId?: true
    noteId?: true
    statut?: true
    _all?: true
  }

  export type TeamsPostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsPosts to aggregate.
     */
    where?: TeamsPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsPosts to fetch.
     */
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamsPosts
    **/
    _count?: true | TeamsPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsPostsMaxAggregateInputType
  }

  export type GetTeamsPostsAggregateType<T extends TeamsPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamsPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamsPosts[P]>
      : GetScalarType<T[P], AggregateTeamsPosts[P]>
  }




  export type TeamsPostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsPostsWhereInput
    orderBy?: TeamsPostsOrderByWithAggregationInput | TeamsPostsOrderByWithAggregationInput[]
    by: TeamsPostsScalarFieldEnum[] | TeamsPostsScalarFieldEnum
    having?: TeamsPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsPostsCountAggregateInputType | true
    _min?: TeamsPostsMinAggregateInputType
    _max?: TeamsPostsMaxAggregateInputType
  }

  export type TeamsPostsGroupByOutputType = {
    id: string
    teamId: string
    postId: string
    noteId: string | null
    statut: $Enums.StatusPosts
    _count: TeamsPostsCountAggregateOutputType | null
    _min: TeamsPostsMinAggregateOutputType | null
    _max: TeamsPostsMaxAggregateOutputType | null
  }

  type GetTeamsPostsGroupByPayload<T extends TeamsPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsPostsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsPostsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsPostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    postId?: boolean
    noteId?: boolean
    statut?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }, ExtArgs["result"]["teamsPosts"]>

  export type TeamsPostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    postId?: boolean
    noteId?: boolean
    statut?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }, ExtArgs["result"]["teamsPosts"]>

  export type TeamsPostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    postId?: boolean
    noteId?: boolean
    statut?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }, ExtArgs["result"]["teamsPosts"]>

  export type TeamsPostsSelectScalar = {
    id?: boolean
    teamId?: boolean
    postId?: boolean
    noteId?: boolean
    statut?: boolean
  }

  export type TeamsPostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "postId" | "noteId" | "statut", ExtArgs["result"]["teamsPosts"]>
  export type TeamsPostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }
  export type TeamsPostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }
  export type TeamsPostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    note?: boolean | TeamsPosts$noteArgs<ExtArgs>
  }

  export type $TeamsPostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamsPosts"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
      note: Prisma.$NotesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      postId: string
      noteId: string | null
      statut: $Enums.StatusPosts
    }, ExtArgs["result"]["teamsPosts"]>
    composites: {}
  }

  type TeamsPostsGetPayload<S extends boolean | null | undefined | TeamsPostsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPostsPayload, S>

  type TeamsPostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsPostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsPostsCountAggregateInputType | true
    }

  export interface TeamsPostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamsPosts'], meta: { name: 'TeamsPosts' } }
    /**
     * Find zero or one TeamsPosts that matches the filter.
     * @param {TeamsPostsFindUniqueArgs} args - Arguments to find a TeamsPosts
     * @example
     * // Get one TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsPostsFindUniqueArgs>(args: SelectSubset<T, TeamsPostsFindUniqueArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamsPosts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsPostsFindUniqueOrThrowArgs} args - Arguments to find a TeamsPosts
     * @example
     * // Get one TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsPostsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsPostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsFindFirstArgs} args - Arguments to find a TeamsPosts
     * @example
     * // Get one TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsPostsFindFirstArgs>(args?: SelectSubset<T, TeamsPostsFindFirstArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamsPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsFindFirstOrThrowArgs} args - Arguments to find a TeamsPosts
     * @example
     * // Get one TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsPostsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsPostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamsPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findMany()
     * 
     * // Get first 10 TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsPostsWithIdOnly = await prisma.teamsPosts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsPostsFindManyArgs>(args?: SelectSubset<T, TeamsPostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamsPosts.
     * @param {TeamsPostsCreateArgs} args - Arguments to create a TeamsPosts.
     * @example
     * // Create one TeamsPosts
     * const TeamsPosts = await prisma.teamsPosts.create({
     *   data: {
     *     // ... data to create a TeamsPosts
     *   }
     * })
     * 
     */
    create<T extends TeamsPostsCreateArgs>(args: SelectSubset<T, TeamsPostsCreateArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamsPosts.
     * @param {TeamsPostsCreateManyArgs} args - Arguments to create many TeamsPosts.
     * @example
     * // Create many TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsPostsCreateManyArgs>(args?: SelectSubset<T, TeamsPostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamsPosts and returns the data saved in the database.
     * @param {TeamsPostsCreateManyAndReturnArgs} args - Arguments to create many TeamsPosts.
     * @example
     * // Create many TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamsPosts and only return the `id`
     * const teamsPostsWithIdOnly = await prisma.teamsPosts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsPostsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsPostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamsPosts.
     * @param {TeamsPostsDeleteArgs} args - Arguments to delete one TeamsPosts.
     * @example
     * // Delete one TeamsPosts
     * const TeamsPosts = await prisma.teamsPosts.delete({
     *   where: {
     *     // ... filter to delete one TeamsPosts
     *   }
     * })
     * 
     */
    delete<T extends TeamsPostsDeleteArgs>(args: SelectSubset<T, TeamsPostsDeleteArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamsPosts.
     * @param {TeamsPostsUpdateArgs} args - Arguments to update one TeamsPosts.
     * @example
     * // Update one TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsPostsUpdateArgs>(args: SelectSubset<T, TeamsPostsUpdateArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamsPosts.
     * @param {TeamsPostsDeleteManyArgs} args - Arguments to filter TeamsPosts to delete.
     * @example
     * // Delete a few TeamsPosts
     * const { count } = await prisma.teamsPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsPostsDeleteManyArgs>(args?: SelectSubset<T, TeamsPostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsPostsUpdateManyArgs>(args: SelectSubset<T, TeamsPostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamsPosts and returns the data updated in the database.
     * @param {TeamsPostsUpdateManyAndReturnArgs} args - Arguments to update many TeamsPosts.
     * @example
     * // Update many TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamsPosts and only return the `id`
     * const teamsPostsWithIdOnly = await prisma.teamsPosts.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamsPostsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsPostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamsPosts.
     * @param {TeamsPostsUpsertArgs} args - Arguments to update or create a TeamsPosts.
     * @example
     * // Update or create a TeamsPosts
     * const teamsPosts = await prisma.teamsPosts.upsert({
     *   create: {
     *     // ... data to create a TeamsPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamsPosts we want to update
     *   }
     * })
     */
    upsert<T extends TeamsPostsUpsertArgs>(args: SelectSubset<T, TeamsPostsUpsertArgs<ExtArgs>>): Prisma__TeamsPostsClient<$Result.GetResult<Prisma.$TeamsPostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsCountArgs} args - Arguments to filter TeamsPosts to count.
     * @example
     * // Count the number of TeamsPosts
     * const count = await prisma.teamsPosts.count({
     *   where: {
     *     // ... the filter for the TeamsPosts we want to count
     *   }
     * })
    **/
    count<T extends TeamsPostsCountArgs>(
      args?: Subset<T, TeamsPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsPostsAggregateArgs>(args: Subset<T, TeamsPostsAggregateArgs>): Prisma.PrismaPromise<GetTeamsPostsAggregateType<T>>

    /**
     * Group by TeamsPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsPostsGroupByArgs} args - Group by arguments.
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
      T extends TeamsPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsPostsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsPostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamsPosts model
   */
  readonly fields: TeamsPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamsPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsPostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    note<T extends TeamsPosts$noteArgs<ExtArgs> = {}>(args?: Subset<T, TeamsPosts$noteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamsPosts model
   */
  interface TeamsPostsFieldRefs {
    readonly id: FieldRef<"TeamsPosts", 'String'>
    readonly teamId: FieldRef<"TeamsPosts", 'String'>
    readonly postId: FieldRef<"TeamsPosts", 'String'>
    readonly noteId: FieldRef<"TeamsPosts", 'String'>
    readonly statut: FieldRef<"TeamsPosts", 'StatusPosts'>
  }
    

  // Custom InputTypes
  /**
   * TeamsPosts findUnique
   */
  export type TeamsPostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsPosts to fetch.
     */
    where: TeamsPostsWhereUniqueInput
  }

  /**
   * TeamsPosts findUniqueOrThrow
   */
  export type TeamsPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsPosts to fetch.
     */
    where: TeamsPostsWhereUniqueInput
  }

  /**
   * TeamsPosts findFirst
   */
  export type TeamsPostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsPosts to fetch.
     */
    where?: TeamsPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsPosts to fetch.
     */
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsPosts.
     */
    cursor?: TeamsPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsPosts.
     */
    distinct?: TeamsPostsScalarFieldEnum | TeamsPostsScalarFieldEnum[]
  }

  /**
   * TeamsPosts findFirstOrThrow
   */
  export type TeamsPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsPosts to fetch.
     */
    where?: TeamsPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsPosts to fetch.
     */
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamsPosts.
     */
    cursor?: TeamsPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamsPosts.
     */
    distinct?: TeamsPostsScalarFieldEnum | TeamsPostsScalarFieldEnum[]
  }

  /**
   * TeamsPosts findMany
   */
  export type TeamsPostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter, which TeamsPosts to fetch.
     */
    where?: TeamsPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamsPosts to fetch.
     */
    orderBy?: TeamsPostsOrderByWithRelationInput | TeamsPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamsPosts.
     */
    cursor?: TeamsPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamsPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamsPosts.
     */
    skip?: number
    distinct?: TeamsPostsScalarFieldEnum | TeamsPostsScalarFieldEnum[]
  }

  /**
   * TeamsPosts create
   */
  export type TeamsPostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamsPosts.
     */
    data: XOR<TeamsPostsCreateInput, TeamsPostsUncheckedCreateInput>
  }

  /**
   * TeamsPosts createMany
   */
  export type TeamsPostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamsPosts.
     */
    data: TeamsPostsCreateManyInput | TeamsPostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamsPosts createManyAndReturn
   */
  export type TeamsPostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * The data used to create many TeamsPosts.
     */
    data: TeamsPostsCreateManyInput | TeamsPostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsPosts update
   */
  export type TeamsPostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamsPosts.
     */
    data: XOR<TeamsPostsUpdateInput, TeamsPostsUncheckedUpdateInput>
    /**
     * Choose, which TeamsPosts to update.
     */
    where: TeamsPostsWhereUniqueInput
  }

  /**
   * TeamsPosts updateMany
   */
  export type TeamsPostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamsPosts.
     */
    data: XOR<TeamsPostsUpdateManyMutationInput, TeamsPostsUncheckedUpdateManyInput>
    /**
     * Filter which TeamsPosts to update
     */
    where?: TeamsPostsWhereInput
    /**
     * Limit how many TeamsPosts to update.
     */
    limit?: number
  }

  /**
   * TeamsPosts updateManyAndReturn
   */
  export type TeamsPostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * The data used to update TeamsPosts.
     */
    data: XOR<TeamsPostsUpdateManyMutationInput, TeamsPostsUncheckedUpdateManyInput>
    /**
     * Filter which TeamsPosts to update
     */
    where?: TeamsPostsWhereInput
    /**
     * Limit how many TeamsPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamsPosts upsert
   */
  export type TeamsPostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamsPosts to update in case it exists.
     */
    where: TeamsPostsWhereUniqueInput
    /**
     * In case the TeamsPosts found by the `where` argument doesn't exist, create a new TeamsPosts with this data.
     */
    create: XOR<TeamsPostsCreateInput, TeamsPostsUncheckedCreateInput>
    /**
     * In case the TeamsPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsPostsUpdateInput, TeamsPostsUncheckedUpdateInput>
  }

  /**
   * TeamsPosts delete
   */
  export type TeamsPostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
    /**
     * Filter which TeamsPosts to delete.
     */
    where: TeamsPostsWhereUniqueInput
  }

  /**
   * TeamsPosts deleteMany
   */
  export type TeamsPostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamsPosts to delete
     */
    where?: TeamsPostsWhereInput
    /**
     * Limit how many TeamsPosts to delete.
     */
    limit?: number
  }

  /**
   * TeamsPosts.note
   */
  export type TeamsPosts$noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
  }

  /**
   * TeamsPosts without action
   */
  export type TeamsPostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsPosts
     */
    select?: TeamsPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamsPosts
     */
    omit?: TeamsPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsPostsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const UsersTeamsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type UsersTeamsScalarFieldEnum = (typeof UsersTeamsScalarFieldEnum)[keyof typeof UsersTeamsScalarFieldEnum]


  export const KeywordsScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    createdAt: 'createdAt'
  };

  export type KeywordsScalarFieldEnum = (typeof KeywordsScalarFieldEnum)[keyof typeof KeywordsScalarFieldEnum]


  export const TeamsKeywordsScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    keywordId: 'keywordId',
    statut: 'statut',
    createdAt: 'createdAt'
  };

  export type TeamsKeywordsScalarFieldEnum = (typeof TeamsKeywordsScalarFieldEnum)[keyof typeof TeamsKeywordsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    text: 'text',
    subreddit: 'subreddit',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    text: 'text',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const TeamsPostsScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    postId: 'postId',
    noteId: 'noteId',
    statut: 'statut'
  };

  export type TeamsPostsScalarFieldEnum = (typeof TeamsPostsScalarFieldEnum)[keyof typeof TeamsPostsScalarFieldEnum]


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
   * Reference to a field of type 'StatusKeywords'
   */
  export type EnumStatusKeywordsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKeywords'>
    


  /**
   * Reference to a field of type 'StatusKeywords[]'
   */
  export type ListEnumStatusKeywordsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKeywords[]'>
    


  /**
   * Reference to a field of type 'StatusPosts'
   */
  export type EnumStatusPostsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPosts'>
    


  /**
   * Reference to a field of type 'StatusPosts[]'
   */
  export type ListEnumStatusPostsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPosts[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    teams?: UsersTeamsListRelationFilter
    notes?: NotesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    teams?: UsersTeamsOrderByRelationAggregateInput
    notes?: NotesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    teams?: UsersTeamsListRelationFilter
    notes?: NotesListRelationFilter
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    id?: StringFilter<"Teams"> | string
    name?: StringFilter<"Teams"> | string
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    users?: UsersTeamsListRelationFilter
    keywords?: TeamsKeywordsListRelationFilter
    posts?: TeamsPostsListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UsersTeamsOrderByRelationAggregateInput
    keywords?: TeamsKeywordsOrderByRelationAggregateInput
    posts?: TeamsPostsOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    name?: StringFilter<"Teams"> | string
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    users?: UsersTeamsListRelationFilter
    keywords?: TeamsKeywordsListRelationFilter
    posts?: TeamsPostsListRelationFilter
  }, "id">

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teams"> | string
    name?: StringWithAggregatesFilter<"Teams"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
  }

  export type UsersTeamsWhereInput = {
    AND?: UsersTeamsWhereInput | UsersTeamsWhereInput[]
    OR?: UsersTeamsWhereInput[]
    NOT?: UsersTeamsWhereInput | UsersTeamsWhereInput[]
    id?: StringFilter<"UsersTeams"> | string
    userId?: StringFilter<"UsersTeams"> | string
    teamId?: StringFilter<"UsersTeams"> | string
    createdAt?: DateTimeFilter<"UsersTeams"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type UsersTeamsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
  }

  export type UsersTeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersTeamsWhereInput | UsersTeamsWhereInput[]
    OR?: UsersTeamsWhereInput[]
    NOT?: UsersTeamsWhereInput | UsersTeamsWhereInput[]
    userId?: StringFilter<"UsersTeams"> | string
    teamId?: StringFilter<"UsersTeams"> | string
    createdAt?: DateTimeFilter<"UsersTeams"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type UsersTeamsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    _count?: UsersTeamsCountOrderByAggregateInput
    _max?: UsersTeamsMaxOrderByAggregateInput
    _min?: UsersTeamsMinOrderByAggregateInput
  }

  export type UsersTeamsScalarWhereWithAggregatesInput = {
    AND?: UsersTeamsScalarWhereWithAggregatesInput | UsersTeamsScalarWhereWithAggregatesInput[]
    OR?: UsersTeamsScalarWhereWithAggregatesInput[]
    NOT?: UsersTeamsScalarWhereWithAggregatesInput | UsersTeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsersTeams"> | string
    userId?: StringWithAggregatesFilter<"UsersTeams"> | string
    teamId?: StringWithAggregatesFilter<"UsersTeams"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UsersTeams"> | Date | string
  }

  export type KeywordsWhereInput = {
    AND?: KeywordsWhereInput | KeywordsWhereInput[]
    OR?: KeywordsWhereInput[]
    NOT?: KeywordsWhereInput | KeywordsWhereInput[]
    id?: StringFilter<"Keywords"> | string
    keyword?: StringFilter<"Keywords"> | string
    createdAt?: DateTimeFilter<"Keywords"> | Date | string
    teams?: TeamsKeywordsListRelationFilter
  }

  export type KeywordsOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
    teams?: TeamsKeywordsOrderByRelationAggregateInput
  }

  export type KeywordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyword?: string
    AND?: KeywordsWhereInput | KeywordsWhereInput[]
    OR?: KeywordsWhereInput[]
    NOT?: KeywordsWhereInput | KeywordsWhereInput[]
    createdAt?: DateTimeFilter<"Keywords"> | Date | string
    teams?: TeamsKeywordsListRelationFilter
  }, "id" | "keyword">

  export type KeywordsOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
    _count?: KeywordsCountOrderByAggregateInput
    _max?: KeywordsMaxOrderByAggregateInput
    _min?: KeywordsMinOrderByAggregateInput
  }

  export type KeywordsScalarWhereWithAggregatesInput = {
    AND?: KeywordsScalarWhereWithAggregatesInput | KeywordsScalarWhereWithAggregatesInput[]
    OR?: KeywordsScalarWhereWithAggregatesInput[]
    NOT?: KeywordsScalarWhereWithAggregatesInput | KeywordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keywords"> | string
    keyword?: StringWithAggregatesFilter<"Keywords"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Keywords"> | Date | string
  }

  export type TeamsKeywordsWhereInput = {
    AND?: TeamsKeywordsWhereInput | TeamsKeywordsWhereInput[]
    OR?: TeamsKeywordsWhereInput[]
    NOT?: TeamsKeywordsWhereInput | TeamsKeywordsWhereInput[]
    id?: StringFilter<"TeamsKeywords"> | string
    teamId?: StringFilter<"TeamsKeywords"> | string
    keywordId?: StringFilter<"TeamsKeywords"> | string
    statut?: EnumStatusKeywordsFilter<"TeamsKeywords"> | $Enums.StatusKeywords
    createdAt?: DateTimeFilter<"TeamsKeywords"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    keyword?: XOR<KeywordsScalarRelationFilter, KeywordsWhereInput>
  }

  export type TeamsKeywordsOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    keywordId?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    team?: TeamsOrderByWithRelationInput
    keyword?: KeywordsOrderByWithRelationInput
  }

  export type TeamsKeywordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_keywordId?: TeamsKeywordsTeamIdKeywordIdCompoundUniqueInput
    AND?: TeamsKeywordsWhereInput | TeamsKeywordsWhereInput[]
    OR?: TeamsKeywordsWhereInput[]
    NOT?: TeamsKeywordsWhereInput | TeamsKeywordsWhereInput[]
    teamId?: StringFilter<"TeamsKeywords"> | string
    keywordId?: StringFilter<"TeamsKeywords"> | string
    statut?: EnumStatusKeywordsFilter<"TeamsKeywords"> | $Enums.StatusKeywords
    createdAt?: DateTimeFilter<"TeamsKeywords"> | Date | string
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    keyword?: XOR<KeywordsScalarRelationFilter, KeywordsWhereInput>
  }, "id" | "teamId_keywordId">

  export type TeamsKeywordsOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    keywordId?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    _count?: TeamsKeywordsCountOrderByAggregateInput
    _max?: TeamsKeywordsMaxOrderByAggregateInput
    _min?: TeamsKeywordsMinOrderByAggregateInput
  }

  export type TeamsKeywordsScalarWhereWithAggregatesInput = {
    AND?: TeamsKeywordsScalarWhereWithAggregatesInput | TeamsKeywordsScalarWhereWithAggregatesInput[]
    OR?: TeamsKeywordsScalarWhereWithAggregatesInput[]
    NOT?: TeamsKeywordsScalarWhereWithAggregatesInput | TeamsKeywordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamsKeywords"> | string
    teamId?: StringWithAggregatesFilter<"TeamsKeywords"> | string
    keywordId?: StringWithAggregatesFilter<"TeamsKeywords"> | string
    statut?: EnumStatusKeywordsWithAggregatesFilter<"TeamsKeywords"> | $Enums.StatusKeywords
    createdAt?: DateTimeWithAggregatesFilter<"TeamsKeywords"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    url?: StringFilter<"Posts"> | string
    title?: StringFilter<"Posts"> | string
    text?: StringNullableFilter<"Posts"> | string | null
    subreddit?: StringFilter<"Posts"> | string
    author?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    teams?: TeamsPostsListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    text?: SortOrderInput | SortOrder
    subreddit?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    teams?: TeamsPostsOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    title?: StringFilter<"Posts"> | string
    text?: StringNullableFilter<"Posts"> | string | null
    subreddit?: StringFilter<"Posts"> | string
    author?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    teams?: TeamsPostsListRelationFilter
  }, "id" | "url">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    text?: SortOrderInput | SortOrder
    subreddit?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    url?: StringWithAggregatesFilter<"Posts"> | string
    title?: StringWithAggregatesFilter<"Posts"> | string
    text?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    subreddit?: StringWithAggregatesFilter<"Posts"> | string
    author?: StringWithAggregatesFilter<"Posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: StringFilter<"Notes"> | string
    text?: StringFilter<"Notes"> | string
    userId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    teamsPosts?: XOR<TeamsPostsNullableScalarRelationFilter, TeamsPostsWhereInput> | null
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    teamsPosts?: TeamsPostsOrderByWithRelationInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    text?: StringFilter<"Notes"> | string
    userId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    teamsPosts?: XOR<TeamsPostsNullableScalarRelationFilter, TeamsPostsWhereInput> | null
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notes"> | string
    text?: StringWithAggregatesFilter<"Notes"> | string
    userId?: StringWithAggregatesFilter<"Notes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
  }

  export type TeamsPostsWhereInput = {
    AND?: TeamsPostsWhereInput | TeamsPostsWhereInput[]
    OR?: TeamsPostsWhereInput[]
    NOT?: TeamsPostsWhereInput | TeamsPostsWhereInput[]
    id?: StringFilter<"TeamsPosts"> | string
    teamId?: StringFilter<"TeamsPosts"> | string
    postId?: StringFilter<"TeamsPosts"> | string
    noteId?: StringNullableFilter<"TeamsPosts"> | string | null
    statut?: EnumStatusPostsFilter<"TeamsPosts"> | $Enums.StatusPosts
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    note?: XOR<NotesNullableScalarRelationFilter, NotesWhereInput> | null
  }

  export type TeamsPostsOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    postId?: SortOrder
    noteId?: SortOrderInput | SortOrder
    statut?: SortOrder
    team?: TeamsOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    note?: NotesOrderByWithRelationInput
  }

  export type TeamsPostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteId?: string
    teamId_postId?: TeamsPostsTeamIdPostIdCompoundUniqueInput
    AND?: TeamsPostsWhereInput | TeamsPostsWhereInput[]
    OR?: TeamsPostsWhereInput[]
    NOT?: TeamsPostsWhereInput | TeamsPostsWhereInput[]
    teamId?: StringFilter<"TeamsPosts"> | string
    postId?: StringFilter<"TeamsPosts"> | string
    statut?: EnumStatusPostsFilter<"TeamsPosts"> | $Enums.StatusPosts
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    note?: XOR<NotesNullableScalarRelationFilter, NotesWhereInput> | null
  }, "id" | "noteId" | "teamId_postId">

  export type TeamsPostsOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    postId?: SortOrder
    noteId?: SortOrderInput | SortOrder
    statut?: SortOrder
    _count?: TeamsPostsCountOrderByAggregateInput
    _max?: TeamsPostsMaxOrderByAggregateInput
    _min?: TeamsPostsMinOrderByAggregateInput
  }

  export type TeamsPostsScalarWhereWithAggregatesInput = {
    AND?: TeamsPostsScalarWhereWithAggregatesInput | TeamsPostsScalarWhereWithAggregatesInput[]
    OR?: TeamsPostsScalarWhereWithAggregatesInput[]
    NOT?: TeamsPostsScalarWhereWithAggregatesInput | TeamsPostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamsPosts"> | string
    teamId?: StringWithAggregatesFilter<"TeamsPosts"> | string
    postId?: StringWithAggregatesFilter<"TeamsPosts"> | string
    noteId?: StringNullableWithAggregatesFilter<"TeamsPosts"> | string | null
    statut?: EnumStatusPostsWithAggregatesFilter<"TeamsPosts"> | $Enums.StatusPosts
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    teams?: UsersTeamsCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    teams?: UsersTeamsUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UsersTeamsUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UsersTeamsUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsCreateNestedManyWithoutTeamInput
    keywords?: TeamsKeywordsCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsUncheckedCreateNestedManyWithoutTeamInput
    keywords?: TeamsKeywordsUncheckedCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUpdateManyWithoutTeamNestedInput
    keywords?: TeamsKeywordsUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUncheckedUpdateManyWithoutTeamNestedInput
    keywords?: TeamsKeywordsUncheckedUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTeamsInput
    team: TeamsCreateNestedOneWithoutUsersInput
  }

  export type UsersTeamsUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type UsersTeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTeamsNestedInput
    team?: TeamsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersTeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type UsersTeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordsCreateInput = {
    id?: string
    keyword: string
    createdAt?: Date | string
    teams?: TeamsKeywordsCreateNestedManyWithoutKeywordInput
  }

  export type KeywordsUncheckedCreateInput = {
    id?: string
    keyword: string
    createdAt?: Date | string
    teams?: TeamsKeywordsUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsKeywordsUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsKeywordsUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordsCreateManyInput = {
    id?: string
    keyword: string
    createdAt?: Date | string
  }

  export type KeywordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsCreateInput = {
    id?: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
    team: TeamsCreateNestedOneWithoutKeywordsInput
    keyword: KeywordsCreateNestedOneWithoutTeamsInput
  }

  export type TeamsKeywordsUncheckedCreateInput = {
    id?: string
    teamId: string
    keywordId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsKeywordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutKeywordsNestedInput
    keyword?: KeywordsUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamsKeywordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsCreateManyInput = {
    id?: string
    teamId: string
    keywordId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsKeywordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    id?: string
    url: string
    title: string
    text?: string | null
    subreddit: string
    author: string
    createdAt: Date | string
    teams?: TeamsPostsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    url: string
    title: string
    text?: string | null
    subreddit: string
    author: string
    createdAt: Date | string
    teams?: TeamsPostsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsPostsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsPostsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    url: string
    title: string
    text?: string | null
    subreddit: string
    author: string
    createdAt: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutNotesInput
    teamsPosts?: TeamsPostsCreateNestedOneWithoutNoteInput
  }

  export type NotesUncheckedCreateInput = {
    id?: string
    text: string
    userId: string
    createdAt?: Date | string
    teamsPosts?: TeamsPostsUncheckedCreateNestedOneWithoutNoteInput
  }

  export type NotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotesNestedInput
    teamsPosts?: TeamsPostsUpdateOneWithoutNoteNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamsPosts?: TeamsPostsUncheckedUpdateOneWithoutNoteNestedInput
  }

  export type NotesCreateManyInput = {
    id?: string
    text: string
    userId: string
    createdAt?: Date | string
  }

  export type NotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsPostsCreateInput = {
    id?: string
    statut?: $Enums.StatusPosts
    team: TeamsCreateNestedOneWithoutPostsInput
    post: PostsCreateNestedOneWithoutTeamsInput
    note?: NotesCreateNestedOneWithoutTeamsPostsInput
  }

  export type TeamsPostsUncheckedCreateInput = {
    id?: string
    teamId: string
    postId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
    team?: TeamsUpdateOneRequiredWithoutPostsNestedInput
    post?: PostsUpdateOneRequiredWithoutTeamsNestedInput
    note?: NotesUpdateOneWithoutTeamsPostsNestedInput
  }

  export type TeamsPostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsPostsCreateManyInput = {
    id?: string
    teamId: string
    postId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsPostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
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

  export type UsersTeamsListRelationFilter = {
    every?: UsersTeamsWhereInput
    some?: UsersTeamsWhereInput
    none?: UsersTeamsWhereInput
  }

  export type NotesListRelationFilter = {
    every?: NotesWhereInput
    some?: NotesWhereInput
    none?: NotesWhereInput
  }

  export type UsersTeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type TeamsKeywordsListRelationFilter = {
    every?: TeamsKeywordsWhereInput
    some?: TeamsKeywordsWhereInput
    none?: TeamsKeywordsWhereInput
  }

  export type TeamsPostsListRelationFilter = {
    every?: TeamsPostsWhereInput
    some?: TeamsPostsWhereInput
    none?: TeamsPostsWhereInput
  }

  export type TeamsKeywordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsPostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TeamsScalarRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type UsersTeamsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersTeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersTeamsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordsCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordsMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
  }

  export type KeywordsMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusKeywordsFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKeywords | EnumStatusKeywordsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKeywordsFilter<$PrismaModel> | $Enums.StatusKeywords
  }

  export type KeywordsScalarRelationFilter = {
    is?: KeywordsWhereInput
    isNot?: KeywordsWhereInput
  }

  export type TeamsKeywordsTeamIdKeywordIdCompoundUniqueInput = {
    teamId: string
    keywordId: string
  }

  export type TeamsKeywordsCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    keywordId?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamsKeywordsMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    keywordId?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamsKeywordsMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    keywordId?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusKeywordsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKeywords | EnumStatusKeywordsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKeywordsWithAggregatesFilter<$PrismaModel> | $Enums.StatusKeywords
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKeywordsFilter<$PrismaModel>
    _max?: NestedEnumStatusKeywordsFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    text?: SortOrder
    subreddit?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    text?: SortOrder
    subreddit?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    text?: SortOrder
    subreddit?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
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

  export type TeamsPostsNullableScalarRelationFilter = {
    is?: TeamsPostsWhereInput | null
    isNot?: TeamsPostsWhereInput | null
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusPostsFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPosts | EnumStatusPostsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostsFilter<$PrismaModel> | $Enums.StatusPosts
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type NotesNullableScalarRelationFilter = {
    is?: NotesWhereInput | null
    isNot?: NotesWhereInput | null
  }

  export type TeamsPostsTeamIdPostIdCompoundUniqueInput = {
    teamId: string
    postId: string
  }

  export type TeamsPostsCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    postId?: SortOrder
    noteId?: SortOrder
    statut?: SortOrder
  }

  export type TeamsPostsMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    postId?: SortOrder
    noteId?: SortOrder
    statut?: SortOrder
  }

  export type TeamsPostsMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    postId?: SortOrder
    noteId?: SortOrder
    statut?: SortOrder
  }

  export type EnumStatusPostsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPosts | EnumStatusPostsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostsWithAggregatesFilter<$PrismaModel> | $Enums.StatusPosts
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPostsFilter<$PrismaModel>
    _max?: NestedEnumStatusPostsFilter<$PrismaModel>
  }

  export type UsersTeamsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput> | UsersTeamsCreateWithoutUserInput[] | UsersTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutUserInput | UsersTeamsCreateOrConnectWithoutUserInput[]
    createMany?: UsersTeamsCreateManyUserInputEnvelope
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
  }

  export type NotesCreateNestedManyWithoutUserInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type UsersTeamsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput> | UsersTeamsCreateWithoutUserInput[] | UsersTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutUserInput | UsersTeamsCreateOrConnectWithoutUserInput[]
    createMany?: UsersTeamsCreateManyUserInputEnvelope
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersTeamsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput> | UsersTeamsCreateWithoutUserInput[] | UsersTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutUserInput | UsersTeamsCreateOrConnectWithoutUserInput[]
    upsert?: UsersTeamsUpsertWithWhereUniqueWithoutUserInput | UsersTeamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersTeamsCreateManyUserInputEnvelope
    set?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    disconnect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    delete?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    update?: UsersTeamsUpdateWithWhereUniqueWithoutUserInput | UsersTeamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersTeamsUpdateManyWithWhereWithoutUserInput | UsersTeamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
  }

  export type NotesUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutUserInput | NotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutUserInput | NotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutUserInput | NotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type UsersTeamsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput> | UsersTeamsCreateWithoutUserInput[] | UsersTeamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutUserInput | UsersTeamsCreateOrConnectWithoutUserInput[]
    upsert?: UsersTeamsUpsertWithWhereUniqueWithoutUserInput | UsersTeamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersTeamsCreateManyUserInputEnvelope
    set?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    disconnect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    delete?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    update?: UsersTeamsUpdateWithWhereUniqueWithoutUserInput | UsersTeamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersTeamsUpdateManyWithWhereWithoutUserInput | UsersTeamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutUserInput | NotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutUserInput | NotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutUserInput | NotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type UsersTeamsCreateNestedManyWithoutTeamInput = {
    create?: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput> | UsersTeamsCreateWithoutTeamInput[] | UsersTeamsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutTeamInput | UsersTeamsCreateOrConnectWithoutTeamInput[]
    createMany?: UsersTeamsCreateManyTeamInputEnvelope
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
  }

  export type TeamsKeywordsCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput> | TeamsKeywordsCreateWithoutTeamInput[] | TeamsKeywordsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutTeamInput | TeamsKeywordsCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsKeywordsCreateManyTeamInputEnvelope
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
  }

  export type TeamsPostsCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput> | TeamsPostsCreateWithoutTeamInput[] | TeamsPostsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutTeamInput | TeamsPostsCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsPostsCreateManyTeamInputEnvelope
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
  }

  export type UsersTeamsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput> | UsersTeamsCreateWithoutTeamInput[] | UsersTeamsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutTeamInput | UsersTeamsCreateOrConnectWithoutTeamInput[]
    createMany?: UsersTeamsCreateManyTeamInputEnvelope
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
  }

  export type TeamsKeywordsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput> | TeamsKeywordsCreateWithoutTeamInput[] | TeamsKeywordsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutTeamInput | TeamsKeywordsCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsKeywordsCreateManyTeamInputEnvelope
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
  }

  export type TeamsPostsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput> | TeamsPostsCreateWithoutTeamInput[] | TeamsPostsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutTeamInput | TeamsPostsCreateOrConnectWithoutTeamInput[]
    createMany?: TeamsPostsCreateManyTeamInputEnvelope
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
  }

  export type UsersTeamsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput> | UsersTeamsCreateWithoutTeamInput[] | UsersTeamsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutTeamInput | UsersTeamsCreateOrConnectWithoutTeamInput[]
    upsert?: UsersTeamsUpsertWithWhereUniqueWithoutTeamInput | UsersTeamsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UsersTeamsCreateManyTeamInputEnvelope
    set?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    disconnect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    delete?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    update?: UsersTeamsUpdateWithWhereUniqueWithoutTeamInput | UsersTeamsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UsersTeamsUpdateManyWithWhereWithoutTeamInput | UsersTeamsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
  }

  export type TeamsKeywordsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput> | TeamsKeywordsCreateWithoutTeamInput[] | TeamsKeywordsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutTeamInput | TeamsKeywordsCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsKeywordsUpsertWithWhereUniqueWithoutTeamInput | TeamsKeywordsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsKeywordsCreateManyTeamInputEnvelope
    set?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    disconnect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    delete?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    update?: TeamsKeywordsUpdateWithWhereUniqueWithoutTeamInput | TeamsKeywordsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsKeywordsUpdateManyWithWhereWithoutTeamInput | TeamsKeywordsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
  }

  export type TeamsPostsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput> | TeamsPostsCreateWithoutTeamInput[] | TeamsPostsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutTeamInput | TeamsPostsCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsPostsUpsertWithWhereUniqueWithoutTeamInput | TeamsPostsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsPostsCreateManyTeamInputEnvelope
    set?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    disconnect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    delete?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    update?: TeamsPostsUpdateWithWhereUniqueWithoutTeamInput | TeamsPostsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsPostsUpdateManyWithWhereWithoutTeamInput | TeamsPostsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
  }

  export type UsersTeamsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput> | UsersTeamsCreateWithoutTeamInput[] | UsersTeamsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UsersTeamsCreateOrConnectWithoutTeamInput | UsersTeamsCreateOrConnectWithoutTeamInput[]
    upsert?: UsersTeamsUpsertWithWhereUniqueWithoutTeamInput | UsersTeamsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UsersTeamsCreateManyTeamInputEnvelope
    set?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    disconnect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    delete?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    connect?: UsersTeamsWhereUniqueInput | UsersTeamsWhereUniqueInput[]
    update?: UsersTeamsUpdateWithWhereUniqueWithoutTeamInput | UsersTeamsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UsersTeamsUpdateManyWithWhereWithoutTeamInput | UsersTeamsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
  }

  export type TeamsKeywordsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput> | TeamsKeywordsCreateWithoutTeamInput[] | TeamsKeywordsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutTeamInput | TeamsKeywordsCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsKeywordsUpsertWithWhereUniqueWithoutTeamInput | TeamsKeywordsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsKeywordsCreateManyTeamInputEnvelope
    set?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    disconnect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    delete?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    update?: TeamsKeywordsUpdateWithWhereUniqueWithoutTeamInput | TeamsKeywordsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsKeywordsUpdateManyWithWhereWithoutTeamInput | TeamsKeywordsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
  }

  export type TeamsPostsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput> | TeamsPostsCreateWithoutTeamInput[] | TeamsPostsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutTeamInput | TeamsPostsCreateOrConnectWithoutTeamInput[]
    upsert?: TeamsPostsUpsertWithWhereUniqueWithoutTeamInput | TeamsPostsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamsPostsCreateManyTeamInputEnvelope
    set?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    disconnect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    delete?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    update?: TeamsPostsUpdateWithWhereUniqueWithoutTeamInput | TeamsPostsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamsPostsUpdateManyWithWhereWithoutTeamInput | TeamsPostsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamsInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutUsersInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput
    connect?: TeamsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamsInput
    upsert?: UsersUpsertWithoutTeamsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTeamsInput, UsersUpdateWithoutTeamsInput>, UsersUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput
    upsert?: TeamsUpsertWithoutUsersInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutUsersInput, TeamsUpdateWithoutUsersInput>, TeamsUncheckedUpdateWithoutUsersInput>
  }

  export type TeamsKeywordsCreateNestedManyWithoutKeywordInput = {
    create?: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput> | TeamsKeywordsCreateWithoutKeywordInput[] | TeamsKeywordsUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutKeywordInput | TeamsKeywordsCreateOrConnectWithoutKeywordInput[]
    createMany?: TeamsKeywordsCreateManyKeywordInputEnvelope
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
  }

  export type TeamsKeywordsUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput> | TeamsKeywordsCreateWithoutKeywordInput[] | TeamsKeywordsUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutKeywordInput | TeamsKeywordsCreateOrConnectWithoutKeywordInput[]
    createMany?: TeamsKeywordsCreateManyKeywordInputEnvelope
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
  }

  export type TeamsKeywordsUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput> | TeamsKeywordsCreateWithoutKeywordInput[] | TeamsKeywordsUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutKeywordInput | TeamsKeywordsCreateOrConnectWithoutKeywordInput[]
    upsert?: TeamsKeywordsUpsertWithWhereUniqueWithoutKeywordInput | TeamsKeywordsUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: TeamsKeywordsCreateManyKeywordInputEnvelope
    set?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    disconnect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    delete?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    update?: TeamsKeywordsUpdateWithWhereUniqueWithoutKeywordInput | TeamsKeywordsUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: TeamsKeywordsUpdateManyWithWhereWithoutKeywordInput | TeamsKeywordsUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
  }

  export type TeamsKeywordsUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput> | TeamsKeywordsCreateWithoutKeywordInput[] | TeamsKeywordsUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: TeamsKeywordsCreateOrConnectWithoutKeywordInput | TeamsKeywordsCreateOrConnectWithoutKeywordInput[]
    upsert?: TeamsKeywordsUpsertWithWhereUniqueWithoutKeywordInput | TeamsKeywordsUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: TeamsKeywordsCreateManyKeywordInputEnvelope
    set?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    disconnect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    delete?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    connect?: TeamsKeywordsWhereUniqueInput | TeamsKeywordsWhereUniqueInput[]
    update?: TeamsKeywordsUpdateWithWhereUniqueWithoutKeywordInput | TeamsKeywordsUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: TeamsKeywordsUpdateManyWithWhereWithoutKeywordInput | TeamsKeywordsUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
  }

  export type TeamsCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<TeamsCreateWithoutKeywordsInput, TeamsUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutKeywordsInput
    connect?: TeamsWhereUniqueInput
  }

  export type KeywordsCreateNestedOneWithoutTeamsInput = {
    create?: XOR<KeywordsCreateWithoutTeamsInput, KeywordsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: KeywordsCreateOrConnectWithoutTeamsInput
    connect?: KeywordsWhereUniqueInput
  }

  export type EnumStatusKeywordsFieldUpdateOperationsInput = {
    set?: $Enums.StatusKeywords
  }

  export type TeamsUpdateOneRequiredWithoutKeywordsNestedInput = {
    create?: XOR<TeamsCreateWithoutKeywordsInput, TeamsUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutKeywordsInput
    upsert?: TeamsUpsertWithoutKeywordsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutKeywordsInput, TeamsUpdateWithoutKeywordsInput>, TeamsUncheckedUpdateWithoutKeywordsInput>
  }

  export type KeywordsUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<KeywordsCreateWithoutTeamsInput, KeywordsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: KeywordsCreateOrConnectWithoutTeamsInput
    upsert?: KeywordsUpsertWithoutTeamsInput
    connect?: KeywordsWhereUniqueInput
    update?: XOR<XOR<KeywordsUpdateToOneWithWhereWithoutTeamsInput, KeywordsUpdateWithoutTeamsInput>, KeywordsUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamsPostsCreateNestedManyWithoutPostInput = {
    create?: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput> | TeamsPostsCreateWithoutPostInput[] | TeamsPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutPostInput | TeamsPostsCreateOrConnectWithoutPostInput[]
    createMany?: TeamsPostsCreateManyPostInputEnvelope
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
  }

  export type TeamsPostsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput> | TeamsPostsCreateWithoutPostInput[] | TeamsPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutPostInput | TeamsPostsCreateOrConnectWithoutPostInput[]
    createMany?: TeamsPostsCreateManyPostInputEnvelope
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeamsPostsUpdateManyWithoutPostNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput> | TeamsPostsCreateWithoutPostInput[] | TeamsPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutPostInput | TeamsPostsCreateOrConnectWithoutPostInput[]
    upsert?: TeamsPostsUpsertWithWhereUniqueWithoutPostInput | TeamsPostsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TeamsPostsCreateManyPostInputEnvelope
    set?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    disconnect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    delete?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    update?: TeamsPostsUpdateWithWhereUniqueWithoutPostInput | TeamsPostsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TeamsPostsUpdateManyWithWhereWithoutPostInput | TeamsPostsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
  }

  export type TeamsPostsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput> | TeamsPostsCreateWithoutPostInput[] | TeamsPostsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutPostInput | TeamsPostsCreateOrConnectWithoutPostInput[]
    upsert?: TeamsPostsUpsertWithWhereUniqueWithoutPostInput | TeamsPostsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: TeamsPostsCreateManyPostInputEnvelope
    set?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    disconnect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    delete?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    connect?: TeamsPostsWhereUniqueInput | TeamsPostsWhereUniqueInput[]
    update?: TeamsPostsUpdateWithWhereUniqueWithoutPostInput | TeamsPostsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: TeamsPostsUpdateManyWithWhereWithoutPostInput | TeamsPostsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutNotesInput = {
    create?: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotesInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamsPostsCreateNestedOneWithoutNoteInput = {
    create?: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutNoteInput
    connect?: TeamsPostsWhereUniqueInput
  }

  export type TeamsPostsUncheckedCreateNestedOneWithoutNoteInput = {
    create?: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutNoteInput
    connect?: TeamsPostsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotesInput
    upsert?: UsersUpsertWithoutNotesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotesInput, UsersUpdateWithoutNotesInput>, UsersUncheckedUpdateWithoutNotesInput>
  }

  export type TeamsPostsUpdateOneWithoutNoteNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutNoteInput
    upsert?: TeamsPostsUpsertWithoutNoteInput
    disconnect?: TeamsPostsWhereInput | boolean
    delete?: TeamsPostsWhereInput | boolean
    connect?: TeamsPostsWhereUniqueInput
    update?: XOR<XOR<TeamsPostsUpdateToOneWithWhereWithoutNoteInput, TeamsPostsUpdateWithoutNoteInput>, TeamsPostsUncheckedUpdateWithoutNoteInput>
  }

  export type TeamsPostsUncheckedUpdateOneWithoutNoteNestedInput = {
    create?: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
    connectOrCreate?: TeamsPostsCreateOrConnectWithoutNoteInput
    upsert?: TeamsPostsUpsertWithoutNoteInput
    disconnect?: TeamsPostsWhereInput | boolean
    delete?: TeamsPostsWhereInput | boolean
    connect?: TeamsPostsWhereUniqueInput
    update?: XOR<XOR<TeamsPostsUpdateToOneWithWhereWithoutNoteInput, TeamsPostsUpdateWithoutNoteInput>, TeamsPostsUncheckedUpdateWithoutNoteInput>
  }

  export type TeamsCreateNestedOneWithoutPostsInput = {
    create?: XOR<TeamsCreateWithoutPostsInput, TeamsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPostsInput
    connect?: TeamsWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutTeamsInput = {
    create?: XOR<PostsCreateWithoutTeamsInput, PostsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTeamsInput
    connect?: PostsWhereUniqueInput
  }

  export type NotesCreateNestedOneWithoutTeamsPostsInput = {
    create?: XOR<NotesCreateWithoutTeamsPostsInput, NotesUncheckedCreateWithoutTeamsPostsInput>
    connectOrCreate?: NotesCreateOrConnectWithoutTeamsPostsInput
    connect?: NotesWhereUniqueInput
  }

  export type EnumStatusPostsFieldUpdateOperationsInput = {
    set?: $Enums.StatusPosts
  }

  export type TeamsUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TeamsCreateWithoutPostsInput, TeamsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutPostsInput
    upsert?: TeamsUpsertWithoutPostsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutPostsInput, TeamsUpdateWithoutPostsInput>, TeamsUncheckedUpdateWithoutPostsInput>
  }

  export type PostsUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<PostsCreateWithoutTeamsInput, PostsUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutTeamsInput
    upsert?: PostsUpsertWithoutTeamsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutTeamsInput, PostsUpdateWithoutTeamsInput>, PostsUncheckedUpdateWithoutTeamsInput>
  }

  export type NotesUpdateOneWithoutTeamsPostsNestedInput = {
    create?: XOR<NotesCreateWithoutTeamsPostsInput, NotesUncheckedCreateWithoutTeamsPostsInput>
    connectOrCreate?: NotesCreateOrConnectWithoutTeamsPostsInput
    upsert?: NotesUpsertWithoutTeamsPostsInput
    disconnect?: NotesWhereInput | boolean
    delete?: NotesWhereInput | boolean
    connect?: NotesWhereUniqueInput
    update?: XOR<XOR<NotesUpdateToOneWithWhereWithoutTeamsPostsInput, NotesUpdateWithoutTeamsPostsInput>, NotesUncheckedUpdateWithoutTeamsPostsInput>
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

  export type NestedEnumStatusKeywordsFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKeywords | EnumStatusKeywordsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKeywordsFilter<$PrismaModel> | $Enums.StatusKeywords
  }

  export type NestedEnumStatusKeywordsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKeywords | EnumStatusKeywordsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKeywords[] | ListEnumStatusKeywordsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKeywordsWithAggregatesFilter<$PrismaModel> | $Enums.StatusKeywords
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKeywordsFilter<$PrismaModel>
    _max?: NestedEnumStatusKeywordsFilter<$PrismaModel>
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

  export type NestedEnumStatusPostsFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPosts | EnumStatusPostsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostsFilter<$PrismaModel> | $Enums.StatusPosts
  }

  export type NestedEnumStatusPostsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPosts | EnumStatusPostsFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPosts[] | ListEnumStatusPostsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPostsWithAggregatesFilter<$PrismaModel> | $Enums.StatusPosts
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPostsFilter<$PrismaModel>
    _max?: NestedEnumStatusPostsFilter<$PrismaModel>
  }

  export type UsersTeamsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    team: TeamsCreateNestedOneWithoutUsersInput
  }

  export type UsersTeamsUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
  }

  export type UsersTeamsCreateOrConnectWithoutUserInput = {
    where: UsersTeamsWhereUniqueInput
    create: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput>
  }

  export type UsersTeamsCreateManyUserInputEnvelope = {
    data: UsersTeamsCreateManyUserInput | UsersTeamsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotesCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    teamsPosts?: TeamsPostsCreateNestedOneWithoutNoteInput
  }

  export type NotesUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    teamsPosts?: TeamsPostsUncheckedCreateNestedOneWithoutNoteInput
  }

  export type NotesCreateOrConnectWithoutUserInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput>
  }

  export type NotesCreateManyUserInputEnvelope = {
    data: NotesCreateManyUserInput | NotesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersTeamsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersTeamsWhereUniqueInput
    update: XOR<UsersTeamsUpdateWithoutUserInput, UsersTeamsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersTeamsCreateWithoutUserInput, UsersTeamsUncheckedCreateWithoutUserInput>
  }

  export type UsersTeamsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersTeamsWhereUniqueInput
    data: XOR<UsersTeamsUpdateWithoutUserInput, UsersTeamsUncheckedUpdateWithoutUserInput>
  }

  export type UsersTeamsUpdateManyWithWhereWithoutUserInput = {
    where: UsersTeamsScalarWhereInput
    data: XOR<UsersTeamsUpdateManyMutationInput, UsersTeamsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersTeamsScalarWhereInput = {
    AND?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
    OR?: UsersTeamsScalarWhereInput[]
    NOT?: UsersTeamsScalarWhereInput | UsersTeamsScalarWhereInput[]
    id?: StringFilter<"UsersTeams"> | string
    userId?: StringFilter<"UsersTeams"> | string
    teamId?: StringFilter<"UsersTeams"> | string
    createdAt?: DateTimeFilter<"UsersTeams"> | Date | string
  }

  export type NotesUpsertWithWhereUniqueWithoutUserInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutUserInput, NotesUncheckedUpdateWithoutUserInput>
    create: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutUserInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutUserInput, NotesUncheckedUpdateWithoutUserInput>
  }

  export type NotesUpdateManyWithWhereWithoutUserInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutUserInput>
  }

  export type NotesScalarWhereInput = {
    AND?: NotesScalarWhereInput | NotesScalarWhereInput[]
    OR?: NotesScalarWhereInput[]
    NOT?: NotesScalarWhereInput | NotesScalarWhereInput[]
    id?: StringFilter<"Notes"> | string
    text?: StringFilter<"Notes"> | string
    userId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
  }

  export type UsersTeamsCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTeamsInput
  }

  export type UsersTeamsUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UsersTeamsCreateOrConnectWithoutTeamInput = {
    where: UsersTeamsWhereUniqueInput
    create: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput>
  }

  export type UsersTeamsCreateManyTeamInputEnvelope = {
    data: UsersTeamsCreateManyTeamInput | UsersTeamsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamsKeywordsCreateWithoutTeamInput = {
    id?: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
    keyword: KeywordsCreateNestedOneWithoutTeamsInput
  }

  export type TeamsKeywordsUncheckedCreateWithoutTeamInput = {
    id?: string
    keywordId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsKeywordsCreateOrConnectWithoutTeamInput = {
    where: TeamsKeywordsWhereUniqueInput
    create: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput>
  }

  export type TeamsKeywordsCreateManyTeamInputEnvelope = {
    data: TeamsKeywordsCreateManyTeamInput | TeamsKeywordsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamsPostsCreateWithoutTeamInput = {
    id?: string
    statut?: $Enums.StatusPosts
    post: PostsCreateNestedOneWithoutTeamsInput
    note?: NotesCreateNestedOneWithoutTeamsPostsInput
  }

  export type TeamsPostsUncheckedCreateWithoutTeamInput = {
    id?: string
    postId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsCreateOrConnectWithoutTeamInput = {
    where: TeamsPostsWhereUniqueInput
    create: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput>
  }

  export type TeamsPostsCreateManyTeamInputEnvelope = {
    data: TeamsPostsCreateManyTeamInput | TeamsPostsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UsersTeamsUpsertWithWhereUniqueWithoutTeamInput = {
    where: UsersTeamsWhereUniqueInput
    update: XOR<UsersTeamsUpdateWithoutTeamInput, UsersTeamsUncheckedUpdateWithoutTeamInput>
    create: XOR<UsersTeamsCreateWithoutTeamInput, UsersTeamsUncheckedCreateWithoutTeamInput>
  }

  export type UsersTeamsUpdateWithWhereUniqueWithoutTeamInput = {
    where: UsersTeamsWhereUniqueInput
    data: XOR<UsersTeamsUpdateWithoutTeamInput, UsersTeamsUncheckedUpdateWithoutTeamInput>
  }

  export type UsersTeamsUpdateManyWithWhereWithoutTeamInput = {
    where: UsersTeamsScalarWhereInput
    data: XOR<UsersTeamsUpdateManyMutationInput, UsersTeamsUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamsKeywordsUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamsKeywordsWhereUniqueInput
    update: XOR<TeamsKeywordsUpdateWithoutTeamInput, TeamsKeywordsUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamsKeywordsCreateWithoutTeamInput, TeamsKeywordsUncheckedCreateWithoutTeamInput>
  }

  export type TeamsKeywordsUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamsKeywordsWhereUniqueInput
    data: XOR<TeamsKeywordsUpdateWithoutTeamInput, TeamsKeywordsUncheckedUpdateWithoutTeamInput>
  }

  export type TeamsKeywordsUpdateManyWithWhereWithoutTeamInput = {
    where: TeamsKeywordsScalarWhereInput
    data: XOR<TeamsKeywordsUpdateManyMutationInput, TeamsKeywordsUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamsKeywordsScalarWhereInput = {
    AND?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
    OR?: TeamsKeywordsScalarWhereInput[]
    NOT?: TeamsKeywordsScalarWhereInput | TeamsKeywordsScalarWhereInput[]
    id?: StringFilter<"TeamsKeywords"> | string
    teamId?: StringFilter<"TeamsKeywords"> | string
    keywordId?: StringFilter<"TeamsKeywords"> | string
    statut?: EnumStatusKeywordsFilter<"TeamsKeywords"> | $Enums.StatusKeywords
    createdAt?: DateTimeFilter<"TeamsKeywords"> | Date | string
  }

  export type TeamsPostsUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamsPostsWhereUniqueInput
    update: XOR<TeamsPostsUpdateWithoutTeamInput, TeamsPostsUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamsPostsCreateWithoutTeamInput, TeamsPostsUncheckedCreateWithoutTeamInput>
  }

  export type TeamsPostsUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamsPostsWhereUniqueInput
    data: XOR<TeamsPostsUpdateWithoutTeamInput, TeamsPostsUncheckedUpdateWithoutTeamInput>
  }

  export type TeamsPostsUpdateManyWithWhereWithoutTeamInput = {
    where: TeamsPostsScalarWhereInput
    data: XOR<TeamsPostsUpdateManyMutationInput, TeamsPostsUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamsPostsScalarWhereInput = {
    AND?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
    OR?: TeamsPostsScalarWhereInput[]
    NOT?: TeamsPostsScalarWhereInput | TeamsPostsScalarWhereInput[]
    id?: StringFilter<"TeamsPosts"> | string
    teamId?: StringFilter<"TeamsPosts"> | string
    postId?: StringFilter<"TeamsPosts"> | string
    noteId?: StringNullableFilter<"TeamsPosts"> | string | null
    statut?: EnumStatusPostsFilter<"TeamsPosts"> | $Enums.StatusPosts
  }

  export type UsersCreateWithoutTeamsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    notes?: NotesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTeamsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTeamsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
  }

  export type TeamsCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    keywords?: TeamsKeywordsCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    keywords?: TeamsKeywordsUncheckedCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutUsersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
  }

  export type UsersUpsertWithoutTeamsInput = {
    update: XOR<UsersUpdateWithoutTeamsInput, UsersUncheckedUpdateWithoutTeamsInput>
    create: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTeamsInput, UsersUncheckedUpdateWithoutTeamsInput>
  }

  export type UsersUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NotesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamsUpsertWithoutUsersInput = {
    update: XOR<TeamsUpdateWithoutUsersInput, TeamsUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutUsersInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutUsersInput, TeamsUncheckedUpdateWithoutUsersInput>
  }

  export type TeamsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: TeamsKeywordsUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keywords?: TeamsKeywordsUncheckedUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsKeywordsCreateWithoutKeywordInput = {
    id?: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
    team: TeamsCreateNestedOneWithoutKeywordsInput
  }

  export type TeamsKeywordsUncheckedCreateWithoutKeywordInput = {
    id?: string
    teamId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsKeywordsCreateOrConnectWithoutKeywordInput = {
    where: TeamsKeywordsWhereUniqueInput
    create: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput>
  }

  export type TeamsKeywordsCreateManyKeywordInputEnvelope = {
    data: TeamsKeywordsCreateManyKeywordInput | TeamsKeywordsCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type TeamsKeywordsUpsertWithWhereUniqueWithoutKeywordInput = {
    where: TeamsKeywordsWhereUniqueInput
    update: XOR<TeamsKeywordsUpdateWithoutKeywordInput, TeamsKeywordsUncheckedUpdateWithoutKeywordInput>
    create: XOR<TeamsKeywordsCreateWithoutKeywordInput, TeamsKeywordsUncheckedCreateWithoutKeywordInput>
  }

  export type TeamsKeywordsUpdateWithWhereUniqueWithoutKeywordInput = {
    where: TeamsKeywordsWhereUniqueInput
    data: XOR<TeamsKeywordsUpdateWithoutKeywordInput, TeamsKeywordsUncheckedUpdateWithoutKeywordInput>
  }

  export type TeamsKeywordsUpdateManyWithWhereWithoutKeywordInput = {
    where: TeamsKeywordsScalarWhereInput
    data: XOR<TeamsKeywordsUpdateManyMutationInput, TeamsKeywordsUncheckedUpdateManyWithoutKeywordInput>
  }

  export type TeamsCreateWithoutKeywordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsUncheckedCreateNestedManyWithoutTeamInput
    posts?: TeamsPostsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutKeywordsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutKeywordsInput, TeamsUncheckedCreateWithoutKeywordsInput>
  }

  export type KeywordsCreateWithoutTeamsInput = {
    id?: string
    keyword: string
    createdAt?: Date | string
  }

  export type KeywordsUncheckedCreateWithoutTeamsInput = {
    id?: string
    keyword: string
    createdAt?: Date | string
  }

  export type KeywordsCreateOrConnectWithoutTeamsInput = {
    where: KeywordsWhereUniqueInput
    create: XOR<KeywordsCreateWithoutTeamsInput, KeywordsUncheckedCreateWithoutTeamsInput>
  }

  export type TeamsUpsertWithoutKeywordsInput = {
    update: XOR<TeamsUpdateWithoutKeywordsInput, TeamsUncheckedUpdateWithoutKeywordsInput>
    create: XOR<TeamsCreateWithoutKeywordsInput, TeamsUncheckedCreateWithoutKeywordsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutKeywordsInput, TeamsUncheckedUpdateWithoutKeywordsInput>
  }

  export type TeamsUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUncheckedUpdateManyWithoutTeamNestedInput
    posts?: TeamsPostsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type KeywordsUpsertWithoutTeamsInput = {
    update: XOR<KeywordsUpdateWithoutTeamsInput, KeywordsUncheckedUpdateWithoutTeamsInput>
    create: XOR<KeywordsCreateWithoutTeamsInput, KeywordsUncheckedCreateWithoutTeamsInput>
    where?: KeywordsWhereInput
  }

  export type KeywordsUpdateToOneWithWhereWithoutTeamsInput = {
    where?: KeywordsWhereInput
    data: XOR<KeywordsUpdateWithoutTeamsInput, KeywordsUncheckedUpdateWithoutTeamsInput>
  }

  export type KeywordsUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KeywordsUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    keyword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsPostsCreateWithoutPostInput = {
    id?: string
    statut?: $Enums.StatusPosts
    team: TeamsCreateNestedOneWithoutPostsInput
    note?: NotesCreateNestedOneWithoutTeamsPostsInput
  }

  export type TeamsPostsUncheckedCreateWithoutPostInput = {
    id?: string
    teamId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsCreateOrConnectWithoutPostInput = {
    where: TeamsPostsWhereUniqueInput
    create: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput>
  }

  export type TeamsPostsCreateManyPostInputEnvelope = {
    data: TeamsPostsCreateManyPostInput | TeamsPostsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type TeamsPostsUpsertWithWhereUniqueWithoutPostInput = {
    where: TeamsPostsWhereUniqueInput
    update: XOR<TeamsPostsUpdateWithoutPostInput, TeamsPostsUncheckedUpdateWithoutPostInput>
    create: XOR<TeamsPostsCreateWithoutPostInput, TeamsPostsUncheckedCreateWithoutPostInput>
  }

  export type TeamsPostsUpdateWithWhereUniqueWithoutPostInput = {
    where: TeamsPostsWhereUniqueInput
    data: XOR<TeamsPostsUpdateWithoutPostInput, TeamsPostsUncheckedUpdateWithoutPostInput>
  }

  export type TeamsPostsUpdateManyWithWhereWithoutPostInput = {
    where: TeamsPostsScalarWhereInput
    data: XOR<TeamsPostsUpdateManyMutationInput, TeamsPostsUncheckedUpdateManyWithoutPostInput>
  }

  export type UsersCreateWithoutNotesInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    teams?: UsersTeamsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    teams?: UsersTeamsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
  }

  export type TeamsPostsCreateWithoutNoteInput = {
    id?: string
    statut?: $Enums.StatusPosts
    team: TeamsCreateNestedOneWithoutPostsInput
    post: PostsCreateNestedOneWithoutTeamsInput
  }

  export type TeamsPostsUncheckedCreateWithoutNoteInput = {
    id?: string
    teamId: string
    postId: string
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsCreateOrConnectWithoutNoteInput = {
    where: TeamsPostsWhereUniqueInput
    create: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
  }

  export type UsersUpsertWithoutNotesInput = {
    update: XOR<UsersUpdateWithoutNotesInput, UsersUncheckedUpdateWithoutNotesInput>
    create: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotesInput, UsersUncheckedUpdateWithoutNotesInput>
  }

  export type UsersUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UsersTeamsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: UsersTeamsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamsPostsUpsertWithoutNoteInput = {
    update: XOR<TeamsPostsUpdateWithoutNoteInput, TeamsPostsUncheckedUpdateWithoutNoteInput>
    create: XOR<TeamsPostsCreateWithoutNoteInput, TeamsPostsUncheckedCreateWithoutNoteInput>
    where?: TeamsPostsWhereInput
  }

  export type TeamsPostsUpdateToOneWithWhereWithoutNoteInput = {
    where?: TeamsPostsWhereInput
    data: XOR<TeamsPostsUpdateWithoutNoteInput, TeamsPostsUncheckedUpdateWithoutNoteInput>
  }

  export type TeamsPostsUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
    team?: TeamsUpdateOneRequiredWithoutPostsNestedInput
    post?: PostsUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamsPostsUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsCreateWithoutPostsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsCreateNestedManyWithoutTeamInput
    keywords?: TeamsKeywordsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UsersTeamsUncheckedCreateNestedManyWithoutTeamInput
    keywords?: TeamsKeywordsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutPostsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutPostsInput, TeamsUncheckedCreateWithoutPostsInput>
  }

  export type PostsCreateWithoutTeamsInput = {
    id?: string
    url: string
    title: string
    text?: string | null
    subreddit: string
    author: string
    createdAt: Date | string
  }

  export type PostsUncheckedCreateWithoutTeamsInput = {
    id?: string
    url: string
    title: string
    text?: string | null
    subreddit: string
    author: string
    createdAt: Date | string
  }

  export type PostsCreateOrConnectWithoutTeamsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutTeamsInput, PostsUncheckedCreateWithoutTeamsInput>
  }

  export type NotesCreateWithoutTeamsPostsInput = {
    id?: string
    text: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateWithoutTeamsPostsInput = {
    id?: string
    text: string
    userId: string
    createdAt?: Date | string
  }

  export type NotesCreateOrConnectWithoutTeamsPostsInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutTeamsPostsInput, NotesUncheckedCreateWithoutTeamsPostsInput>
  }

  export type TeamsUpsertWithoutPostsInput = {
    update: XOR<TeamsUpdateWithoutPostsInput, TeamsUncheckedUpdateWithoutPostsInput>
    create: XOR<TeamsCreateWithoutPostsInput, TeamsUncheckedCreateWithoutPostsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutPostsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutPostsInput, TeamsUncheckedUpdateWithoutPostsInput>
  }

  export type TeamsUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUpdateManyWithoutTeamNestedInput
    keywords?: TeamsKeywordsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersTeamsUncheckedUpdateManyWithoutTeamNestedInput
    keywords?: TeamsKeywordsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PostsUpsertWithoutTeamsInput = {
    update: XOR<PostsUpdateWithoutTeamsInput, PostsUncheckedUpdateWithoutTeamsInput>
    create: XOR<PostsCreateWithoutTeamsInput, PostsUncheckedCreateWithoutTeamsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutTeamsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutTeamsInput, PostsUncheckedUpdateWithoutTeamsInput>
  }

  export type PostsUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    subreddit?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUpsertWithoutTeamsPostsInput = {
    update: XOR<NotesUpdateWithoutTeamsPostsInput, NotesUncheckedUpdateWithoutTeamsPostsInput>
    create: XOR<NotesCreateWithoutTeamsPostsInput, NotesUncheckedCreateWithoutTeamsPostsInput>
    where?: NotesWhereInput
  }

  export type NotesUpdateToOneWithWhereWithoutTeamsPostsInput = {
    where?: NotesWhereInput
    data: XOR<NotesUpdateWithoutTeamsPostsInput, NotesUncheckedUpdateWithoutTeamsPostsInput>
  }

  export type NotesUpdateWithoutTeamsPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateWithoutTeamsPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsCreateManyUserInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
  }

  export type NotesCreateManyUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
  }

  export type UsersTeamsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersTeamsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamsPosts?: TeamsPostsUpdateOneWithoutNoteNestedInput
  }

  export type NotesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamsPosts?: TeamsPostsUncheckedUpdateOneWithoutNoteNestedInput
  }

  export type NotesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsCreateManyTeamInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TeamsKeywordsCreateManyTeamInput = {
    id?: string
    keywordId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsPostsCreateManyTeamInput = {
    id?: string
    postId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type UsersTeamsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type UsersTeamsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersTeamsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keyword?: KeywordsUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamsKeywordsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    keywordId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsPostsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
    post?: PostsUpdateOneRequiredWithoutTeamsNestedInput
    note?: NotesUpdateOneWithoutTeamsPostsNestedInput
  }

  export type TeamsPostsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsPostsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsKeywordsCreateManyKeywordInput = {
    id?: string
    teamId: string
    statut?: $Enums.StatusKeywords
    createdAt?: Date | string
  }

  export type TeamsKeywordsUpdateWithoutKeywordInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutKeywordsNestedInput
  }

  export type TeamsKeywordsUncheckedUpdateWithoutKeywordInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsKeywordsUncheckedUpdateManyWithoutKeywordInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusKeywordsFieldUpdateOperationsInput | $Enums.StatusKeywords
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsPostsCreateManyPostInput = {
    id?: string
    teamId: string
    noteId?: string | null
    statut?: $Enums.StatusPosts
  }

  export type TeamsPostsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
    team?: TeamsUpdateOneRequiredWithoutPostsNestedInput
    note?: NotesUpdateOneWithoutTeamsPostsNestedInput
  }

  export type TeamsPostsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
  }

  export type TeamsPostsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    noteId?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatusPostsFieldUpdateOperationsInput | $Enums.StatusPosts
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