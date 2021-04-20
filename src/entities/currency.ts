import invariant from 'tiny-invariant'

/**
 * A currency is any fungible financial instrument on Huobi Token, including HT and all HERC20 tokens.
 *
 * The only instance of the base class `Currency` is Huobi Token.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly HT: Currency = new Currency(18, 'HT', 'HuobiToken')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.HT`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    invariant(decimals < 255, 'DECIMALS')

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const HT = Currency.HT
export { HT }
