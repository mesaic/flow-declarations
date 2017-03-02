type Thunk<X> = X|() => X;

type TFields = {
  [name: string]: mixed,
};

type TGraphQLObjectTypeOptions = {
  name: string,
  fields: Thunk<TFields>,
  description?: string,
  interfaces?: Array<any>,
  isTypeOf?: (value: any) => boolean,
};

type TGraphQLScalarTypeOptions <InternalType> = {
  name: string;
  description?: ?string;
  serialize: (value: mixed) => ?InternalType;
  parseValue?: (value: mixed) => ?InternalType;
  parseLiteral?: (valueAST: any) => ?InternalType;
}

declare module 'graphql' {
  declare class GraphQLString {}
  declare class GraphQLBoolean {}
  declare class GraphQLFloat {}
  declare class GraphQLInt {}

  declare type GraphQLPrimitive = typeof GraphQLString|typeof GraphQLBoolean|typeof GraphQLFloat|typeof GraphQLInt;

  declare class GraphQLList {
    (type: GraphQLType): this;
  }
  declare class GraphQLNonNull {
    (type: GraphQLType): this;
  }
  declare class GraphQLInputObjectType {
    (options: TGraphQLObjectTypeOptions): this;
  }
  declare class GraphQLObjectType {
    (options: TGraphQLObjectTypeOptions): this;
  }
  declare class GraphQLUnionType {
    (options: {
      name: string,
      types: Array<Class<GraphQLType>>,
      description?: string,
    }): this;
  }
  declare class GraphQLScalarType {
    (options: TGraphQLScalarTypeOptions<*>): this;
  }
  declare class GraphQLEnumType {
    (options: {
      name: string,
      values: {|
        [key: string]: {|
          value: string,
          description?: string,
        |},
      |},
      description?: string,
    }): this;
  }

  declare type GraphQLType = GraphQLNonNull|GraphQLObjectType|GraphQLPrimitive|GraphQLUnionType|GraphQLScalarType;

  declare type Mutation = {
    type: GraphQLType,
    args: {
      [key: string]: {
        type: GraphQLType,
        description?: ?string,
      },
    },
    description?: string,
    resolve: (entity: mixed, args: {[key: string]: mixed}) => mixed,
  };
}
